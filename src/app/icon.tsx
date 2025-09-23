import { ImageResponse } from 'next/og';

export const size = {
  width: 128,
  height: 128,
};

export const contentType = 'image/png';

const Icon=() =>{
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#0070f3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
       Icon
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}

export default Icon;
