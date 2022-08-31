import { Button, Input, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { createElement, FormEvent, useRef, useState } from 'react';

export default function Preview() {
  const [src, setSrc] = useState('http://localhost:3000');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newSrc = inputRef.current?.value;
    if (newSrc) setSrc(newSrc);
  };

  const handleIframeRefresh = () => {
    let frame = document.getElementById('iframe') as HTMLIFrameElement;
    if (frame) {
      // Neat way of handling Cross-origin iframe refresh functionality
      frame.src = frame.src;
    }
  };
  const CustomComponent = () => {
    console.log(Box.propTypes.sx);
    // return ;
    return createElement(Box, null, 'this is a box');
  };
  return (
    <Box width="100%">
      <CustomComponent />
      <Stack direction="row" flexGrow="1" width="100%">
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Input inputRef={inputRef} defaultValue={src} fullWidth />
        </form>
        <Button onClick={handleIframeRefresh}>Refresh</Button>
      </Stack>

      <iframe
        id="iframe"
        src={src}
        title="preview"
        width={'100%'}
        height={'100%'}
        ref={iframeRef}
      />
    </Box>
  );
}
