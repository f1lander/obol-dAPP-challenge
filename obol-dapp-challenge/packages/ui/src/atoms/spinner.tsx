interface SpinnerProps {
  size?: number;
}

export const Spinner = (props: SpinnerProps): JSX.Element => {
  const size = props.size || 6;
  return (
    <div className="flex items-center justify-center">
      <div
        className={`my-2 h-${size} w-${size} animate-spin rounded-full border-b-2 border-body`}
      />
    </div>
  );
};
