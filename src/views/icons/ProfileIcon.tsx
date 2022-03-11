import { CSSProperties } from 'styled-components';
import { IconProps } from 'views/types/icon';

export const ProfileIcon: React.FC<IconProps> = ({
  fill = 'unset',
  width = '2rem',
  height = '2rem',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 52 52"
    fill={fill}
    style={
      {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      } as CSSProperties
    }
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M35.454 18.9091C35.454 21.4166 34.4579 23.8214 32.6848 25.5945C30.9118 27.3676 28.507 28.3637 25.9995 28.3637C23.492 28.3637 21.0872 27.3676 19.3141 25.5945C17.541 23.8214 16.5449 21.4166 16.5449 18.9091C16.5449 16.4016 17.541 13.9968 19.3141 12.2238C21.0872 10.4507 23.492 9.45459 25.9995 9.45459C28.507 9.45459 30.9118 10.4507 32.6848 12.2238C34.4579 13.9968 35.454 16.4016 35.454 18.9091V18.9091ZM30.7267 18.9091C30.7267 20.1629 30.2287 21.3653 29.3422 22.2518C28.4556 23.1384 27.2532 23.6364 25.9995 23.6364C24.7457 23.6364 23.5433 23.1384 22.6568 22.2518C21.7702 21.3653 21.2722 20.1629 21.2722 18.9091C21.2722 17.6554 21.7702 16.453 22.6568 15.5664C23.5433 14.6799 24.7457 14.1819 25.9995 14.1819C27.2532 14.1819 28.4556 14.6799 29.3422 15.5664C30.2287 16.453 30.7267 17.6554 30.7267 18.9091V18.9091Z" />

    <path d="M26 0C11.6409 0 0 11.6409 0 26C0 40.3591 11.6409 52 26 52C40.3591 52 52 40.3591 52 26C52 11.6409 40.3591 0 26 0ZM4.72727 26C4.72727 30.94 6.41255 35.4876 9.23709 39.0993C11.2207 36.4943 13.7798 34.3832 16.7143 32.9309C19.6488 31.4786 22.8794 30.7244 26.1536 30.7273C29.3855 30.7242 32.5754 31.4589 35.4804 32.8753C38.3853 34.2917 40.9286 36.3525 42.9165 38.9007C44.9645 36.2147 46.3434 33.0796 46.9392 29.7548C47.535 26.4301 47.3305 23.0113 46.3426 19.7812C45.3548 16.5512 43.612 13.6028 41.2584 11.1801C38.9049 8.75734 36.0082 6.92985 32.8082 5.84884C29.6081 4.76783 26.1966 4.46437 22.856 4.96357C19.5154 5.46278 16.3417 6.75029 13.5975 8.71958C10.8532 10.6889 8.61737 13.2833 7.0749 16.2883C5.53244 19.2932 4.7277 22.6223 4.72727 26V26ZM26 47.2727C21.1166 47.2801 16.3806 45.6001 12.5935 42.5171C14.1178 40.3348 16.1468 38.5531 18.5077 37.3234C20.8687 36.0938 23.4917 35.4526 26.1536 35.4545C28.7824 35.4524 31.3737 36.0775 33.7124 37.2779C36.051 38.4783 38.0696 40.2193 39.6004 42.3564C35.7838 45.5395 30.9697 47.2797 26 47.2727V47.2727Z" />
  </svg>
);