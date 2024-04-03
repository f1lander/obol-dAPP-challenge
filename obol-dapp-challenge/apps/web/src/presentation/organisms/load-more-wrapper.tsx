/* eslint-disable @typescript-eslint/no-explicit-any -- too much complex types */
'use client';

import type { PropsWithChildren } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

type LoadMoreAction<T extends string | number = any> = T extends number
  ? (offset: T) => Promise<readonly [JSX.Element, number | null]>
  : T extends string
    ? (offset: T) => Promise<readonly [JSX.Element, string | null]>
    : any;

export function LoadMoreWrapper<T extends string | number = any>({
  children,
  initialOffset,
  loadMoreAction,
}: PropsWithChildren<{
  initialOffset: T;
  loadMoreAction: LoadMoreAction<T>;
}>): JSX.Element {
  const ref = useRef<HTMLButtonElement>(null);
  const [loadMoreNodes, setLoadMoreNodes] = useState<JSX.Element[]>([]);

  const [disabled, setDisabled] = useState(false);
  const currentOffsetRef = useRef<number | string | undefined>(initialOffset);

  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(
    (abortController?: AbortController) => {
      setLoading(true);

      // @ts-expect-error Can't yet figure out how to type this
      loadMoreAction(currentOffsetRef.current)
        .then(([node, next]) => {
          if (abortController?.signal.aborted) return;

          setLoadMoreNodes((prev) => [...prev, node]);
          if (next === null) {
            currentOffsetRef.current ??= undefined;
            setDisabled(true);
            return;
          }

          currentOffsetRef.current = next;
        })
        .catch(() => {
          setDisabled(true);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [loadMoreAction]
  );

  useEffect(() => {
    const signal = new AbortController();

    const element = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && element?.disabled === false) {
        loadMore(signal);
      }
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      signal.abort();
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [loadMore]);

  return (
    <>
      <div className='relative grid grid-cols-1 gap-4 pt-12'>
        {children}
        {loadMoreNodes}
      </div>
      <button
        className='absolute bottom-4 left-1/2 mt-2 -translate-x-1/2 transform rounded-lg bg-viridian px-6 py-2 font-medium text-[#081011] hover:bg-aquamarine focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bg-1'
        disabled={disabled || loading}
        ref={ref}
        type='button'
      >
        Load More
      </button>
    </>
  );
}
