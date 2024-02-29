import React from 'react';
import { Button } from './ui/button';

function CollectButton({ className }) {
  return (
    <>
      <Button variant="obolPrimary" className={className}>
        Collect
      </Button>
    </>
  );
}

export default CollectButton;
