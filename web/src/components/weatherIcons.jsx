const weatherIcons = () => {};

export const Clearday = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="clear-day-a"
          x1="149.99"
          y1="119.24"
          x2="234.01"
          y2="264.76"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fbbf24" />
          <stop offset="0.45" stop-color="#fbbf24" />
          <stop offset="1" stop-color="#f59e0b" />
        </linearGradient>
        <symbol id="clear-day-b" viewBox="0 0 384 384">
          <circle
            cx="192"
            cy="192"
            r="84"
            stroke="#f8af18"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#clear-day-a)"
          />

          <path
            d="M192,61.66V12m0,360V322.34M284.17,99.83l35.11-35.11M64.72,319.28l35.11-35.11m0-184.34L64.72,64.72M319.28,319.28l-35.11-35.11M61.66,192H12m360,0H322.34"
            fill="none"
            stroke="#fbbf24"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="24"
          >
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="rotate"
              values="0 192 192; 45 192 192"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </symbol>
      </defs>
      <use
        width="384"
        height="384"
        transform="translate(64 64)"
        xlinkHref="#clear-day-b"
      />
    </svg>
  );
};
export const Cloudy = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="cloudy-a"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f3f7fe" />
          <stop offset="0.45" stopColor="#f3f7fe" />
          <stop offset="1" stopColor="#deeafb" />
        </linearGradient>
        <symbol id="cloudy-b" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            strokeMiterlimit="10"
            strokeWidth="6"
            fill="url(#cloudy-a)"
          />
        </symbol>
      </defs>
      <use
        width="350"
        height="222"
        transform="translate(81 145)"
        xlinkHref="#cloudy-b"
      >
        <animateTransform
          attributeName="transform"
          additive="sum"
          type="translate"
          values="-18 0; 18 0; -18 0"
          dur="6s"
          repeatCount="indefinite"
        />
      </use>
    </svg>
  );
};
export const Drizzle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="drizzle-a"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset="0.45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
        <linearGradient
          id="drizzle-b"
          x1="1314.78"
          y1="-739.91"
          x2="1324.24"
          y2="-715.27"
          gradientTransform="translate(-989.44 1287.05) rotate(-9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0b65ed" />
          <stop offset="0.45" stop-color="#0a5ad4" />
          <stop offset="1" stop-color="#0950bc" />
        </linearGradient>
        <linearGradient
          id="drizzle-c"
          x1="1370.09"
          y1="-731.15"
          x2="1379.55"
          y2="-706.51"
          xlinkHref="#drizzle-b"
        />
        <linearGradient
          id="drizzle-d"
          x1="1425.4"
          y1="-722.39"
          x2="1434.86"
          y2="-697.75"
          xlinkHref="#drizzle-b"
        />
        <symbol id="drizzle-e" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#drizzle-a)"
          />
        </symbol>
      </defs>

      <use
        width="350"
        height="222"
        transform="translate(81 145)"
        xlinkHref="#drizzle-e"
      />

      <path
        d="M200,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,200,376Z"
        stroke="#0a5ad4"
        stroke-miterlimit="10"
        fill="url(#drizzle-b)"
        opacity="0"
      >
        <animateTransform
          id="drizzle-x1"
          attributeName="transform"
          additive="sum"
          type="translate"
          values="0 -32; 0 -32; 0 120;"
          begin="0s; drizzle-x1.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />

        <animate
          id="drizzle-y1"
          attributeName="opacity"
          values="0; 1; 0"
          begin="0s; drizzle-y1.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />
      </path>

      <path
        d="M256,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,256,376Z"
        stroke="#0a5ad4"
        stroke-miterlimit="10"
        fill="url(#drizzle-c)"
        opacity="0"
      >
        <animateTransform
          id="drizzle-x2"
          attributeName="transform"
          additive="sum"
          type="translate"
          values="0 -32; 0 -32; 0 120;"
          begin="1.34s; drizzle-x2.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />

        <animate
          id="drizzle-y2"
          attributeName="opacity"
          values="0; 1; 0"
          begin="1.34s; drizzle-y2.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />
      </path>

      <path
        d="M312,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,312,376Z"
        stroke="#0a5ad4"
        stroke-miterlimit="10"
        fill="url(#drizzle-d)"
        opacity="0"
      >
        <animateTransform
          id="drizzle-x3"
          attributeName="transform"
          additive="sum"
          type="translate"
          values="0 -32; 0 -32; 0 120;"
          begin=".67s; drizzle-x3.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />

        <animate
          id="drizzle-y3"
          attributeName="opacity"
          values="0; 1; 0"
          begin=".67s; drizzle-y3.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />
      </path>
    </svg>
  );
};
export const Extremerain = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="extreme-rain-a"
          x1="52.74"
          y1="9.62"
          x2="133.36"
          y2="149.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9ca3af" />
          <stop offset="0.45" stop-color="#9ca3af" />
          <stop offset="1" stop-color="#6b7280" />
        </linearGradient>
        <linearGradient
          id="extreme-rain-b"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#6b7280" />
          <stop offset="0.45" stop-color="#6b7280" />
          <stop offset="1" stop-color="#4b5563" />
        </linearGradient>
        <linearGradient
          id="extreme-rain-c"
          x1="1381.32"
          y1="-1144.67"
          x2="1399.47"
          y2="-1097.39"
          gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0b65ed" />
          <stop offset="0.45" stop-color="#0a5ad4" />
          <stop offset="1" stop-color="#0950bc" />
        </linearGradient>
        <linearGradient
          id="extreme-rain-d"
          x1="1436.71"
          y1="-1137"
          x2="1454.86"
          y2="-1089.72"
          gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
          xlinkHref="#extreme-rain-c"
        />
        <linearGradient
          id="extreme-rain-e"
          x1="1492.12"
          y1="-1129.34"
          x2="1510.27"
          y2="-1082.06"
          gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
          xlinkHref="#extreme-rain-c"
        />
        <symbol id="extreme-rain-g" viewBox="0 0 200.26 126.12">
          <path
            d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
            stroke="#848b98"
            stroke-miterlimit="10"
            fill="url(#extreme-rain-a)"
          />
        </symbol>
        <symbol id="extreme-rain-h" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#5b6472"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#extreme-rain-b)"
          />
        </symbol>
        <symbol id="extreme-rain-f" viewBox="0 0 398 222" overflow="visible">
          <use
            width="200.26"
            height="126.12"
            transform="translate(198 27)"
            xlinkHref="#extreme-rain-g"
          >
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-9 0; 9 0; -9 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </use>

          <use width="350" height="222" xlinkHref="#extreme-rain-h">
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-18 0; 18 0; -18 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </use>
        </symbol>
        <symbol id="extreme-rain-i" viewBox="0 0 129 57" overflow="visible">
          <path
            d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#extreme-rain-c)"
            opacity="0"
          >
            <animateTransform
              id="extreme-rain-x1"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -60; 0 60"
              begin="0s; extreme-rain-x1.end+.33s"
              dur=".67s"
            />

            <animate
              id="extreme-rain-y1"
              attributeName="opacity"
              values="0; 1; 0"
              begin="0s; extreme-rain-y1.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
            />
          </path>

          <path
            d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#extreme-rain-d)"
            opacity="0"
          >
            <animateTransform
              id="extreme-rain-x2"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -60; 0 60"
              begin=".33s; extreme-rain-x2.end+.33s"
              dur=".67s"
            />

            <animate
              id="extreme-rain-y2"
              attributeName="opacity"
              values="0; 1; 0"
              begin=".33s; extreme-rain-y2.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
            />
          </path>

          <path
            d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#extreme-rain-e)"
            opacity="0"
          >
            <animateTransform
              id="extreme-rain-x3"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -60; 0 60"
              begin="-.33s; extreme-rain-x3.end+.33s"
              dur=".67s"
            />

            <animate
              id="extreme-rain-y3"
              attributeName="opacity"
              values="0; 1; 0"
              begin="-.33s; extreme-rain-y3.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
            />
          </path>
        </symbol>
      </defs>
      <use
        width="398"
        height="222"
        transform="translate(68.84 145)"
        xlinkHref="#extreme-rain-f"
      />
      <use
        width="129"
        height="57"
        transform="translate(191.5 343.5)"
        xlinkHref="#extreme-rain-i"
      />
    </svg>
  );
};
export const Extremesleet = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="extreme-sleet-a"
          x1="52.74"
          y1="9.62"
          x2="133.36"
          y2="149.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9ca3af" />
          <stop offset="0.45" stop-color="#9ca3af" />
          <stop offset="1" stop-color="#6b7280" />
        </linearGradient>
        <linearGradient
          id="extreme-sleet-b"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#6b7280" />
          <stop offset="0.45" stop-color="#6b7280" />
          <stop offset="1" stop-color="#4b5563" />
        </linearGradient>
        <linearGradient
          id="extreme-sleet-c"
          x1="1399.27"
          y1="-1137.35"
          x2="1408.73"
          y2="-1112.71"
          gradientTransform="translate(-1188.61 1355.32) rotate(-9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0b65ed" />
          <stop offset="0.45" stop-color="#0a5ad4" />
          <stop offset="1" stop-color="#0950bc" />
        </linearGradient>
        <linearGradient
          id="extreme-sleet-d"
          x1="1454.58"
          y1="-1128.59"
          x2="1464.04"
          y2="-1103.95"
          xlinkHref="#extreme-sleet-c"
        />
        <linearGradient
          id="extreme-sleet-e"
          x1="1509.89"
          y1="-1119.83"
          x2="1519.35"
          y2="-1095.19"
          xlinkHref="#extreme-sleet-c"
        />
        <linearGradient
          id="extreme-sleet-f"
          x1="11.38"
          y1="5.93"
          x2="32.82"
          y2="43.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#86c3db" />
          <stop offset="0.45" stop-color="#86c3db" />
          <stop offset="1" stop-color="#5eafcf" />
        </linearGradient>
        <linearGradient
          id="extreme-sleet-g"
          x1="67.38"
          y1="5.93"
          x2="88.82"
          y2="43.07"
          xlinkHref="#extreme-sleet-f"
        />
        <linearGradient
          id="extreme-sleet-h"
          x1="123.38"
          y1="5.93"
          x2="144.82"
          y2="43.07"
          xlinkHref="#extreme-sleet-f"
        />
        <symbol id="extreme-sleet-j" viewBox="0 0 200.26 126.12">
          <path
            d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
            stroke="#848b98"
            stroke-miterlimit="10"
            fill="url(#extreme-sleet-a)"
          />
        </symbol>
        <symbol id="extreme-sleet-k" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#5b6472"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#extreme-sleet-b)"
          />
        </symbol>
        <symbol id="extreme-sleet-i" viewBox="0 0 398 222" overflow="visible">
          <use
            width="200.26"
            height="126.12"
            transform="translate(198 27)"
            xlinkHref="#extreme-sleet-j"
          >
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-9 0; 9 0; -9 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </use>

          <use width="350" height="222" xlinkHref="#extreme-sleet-k">
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-18 0; 18 0; -18 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </use>
        </symbol>
        <symbol id="extreme-sleet-m" viewBox="0 0 156.2 49" overflow="visible">
          <g>
            <path
              d="M41.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L41.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,37.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L6.58,11A4.08,4.08,0,0,0,1,12.5,4,4,0,0,0,2.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L2.53,31A4,4,0,0,0,1,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L37.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,41.67,31ZM19.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,19.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#extreme-sleet-f)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 24 24; 360 24 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="extreme-sleet-t1"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin="0s; extreme-sleet-t1.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="extreme-sleet-s1"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin="0s; extreme-sleet-s1.end+1s"
              dur="2s"
            />
          </g>

          <g>
            <path
              d="M97.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L97.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,93.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L62.58,11A4.08,4.08,0,0,0,57,12.5,4,4,0,0,0,58.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L58.53,31A4,4,0,0,0,57,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L93.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,97.67,31ZM75.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,75.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#extreme-sleet-g)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 80 24; 360 80 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="extreme-sleet-t2"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin="-.83s; extreme-sleet-t2.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="extreme-sleet-s2"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin="-.83s; extreme-sleet-s2.end+1s"
              dur="2s"
            />
          </g>

          <g>
            <path
              d="M153.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L153.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,149.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L118.58,11A4.08,4.08,0,0,0,113,12.5,4,4,0,0,0,114.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L114.53,31A4,4,0,0,0,113,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,153.67,31ZM131.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,131.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#extreme-sleet-h)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 136 24; 360 136 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="extreme-sleet-t3"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin=".83s; extreme-sleet-t3.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="extreme-sleet-s3"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin=".83s; extreme-sleet-s3.end+1s"
              dur="2s"
            />
          </g>
        </symbol>
        <symbol id="extreme-sleet-l" viewBox="0 0 156.2 49" overflow="visible">
          <use width="156.2" height="49" xlinkHref="#extreme-sleet-m" />

          <path
            d="M22.1,38.5a8,8,0,0,1-8-8v-12a8,8,0,0,1,16,0v12A8,8,0,0,1,22.1,38.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#extreme-sleet-c)"
            opacity="0"
          >
            <animateTransform
              id="extreme-sleet-x1"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -32; 0 -32; 0 120;"
              begin="0s; extreme-sleet-x1.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />

            <animate
              id="extreme-sleet-y1"
              attributeName="opacity"
              values="0; 1; 0"
              begin="0s; extreme-sleet-y1.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />
          </path>

          <path
            d="M78.1,38.5a8,8,0,0,1-8-8v-12a8,8,0,0,1,16,0v12A8,8,0,0,1,78.1,38.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#extreme-sleet-d)"
            opacity="0"
          >
            <animateTransform
              id="extreme-sleet-x2"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -32; 0 -32; 0 120;"
              begin="1.34s; extreme-sleet-x2.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />

            <animate
              id="extreme-sleet-y2"
              attributeName="opacity"
              values="0; 1; 0"
              begin="1.34s; extreme-sleet-y2.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />
          </path>

          <path
            d="M134.1,38.5a8,8,0,0,1-8-8v-12a8,8,0,0,1,16,0v12A8,8,0,0,1,134.1,38.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#extreme-sleet-e)"
            opacity="0"
          >
            <animateTransform
              id="extreme-sleet-x3"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -32; 0 -32; 0 120;"
              begin=".67s; extreme-sleet-x3.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />

            <animate
              id="extreme-sleet-y3"
              attributeName="opacity"
              values="0; 1; 0"
              begin=".67s; extreme-sleet-y3.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />
          </path>
        </symbol>
      </defs>
      <use
        width="398"
        height="222"
        transform="translate(68.84 145)"
        xlinkHref="#extreme-sleet-i"
      />
      <use
        width="156.2"
        height="49"
        transform="translate(177.9 337.5)"
        xlinkHref="#extreme-sleet-l"
      />
    </svg>
  );
};
export const Extremesnow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="extreme-snow-a"
          x1="52.74"
          y1="9.62"
          x2="133.36"
          y2="149.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9ca3af" />
          <stop offset="0.45" stop-color="#9ca3af" />
          <stop offset="1" stop-color="#6b7280" />
        </linearGradient>
        <linearGradient
          id="extreme-snow-b"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#6b7280" />
          <stop offset="0.45" stop-color="#6b7280" />
          <stop offset="1" stop-color="#4b5563" />
        </linearGradient>
        <linearGradient
          id="extreme-snow-c"
          x1="11.38"
          y1="5.93"
          x2="32.82"
          y2="43.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#86c3db" />
          <stop offset="0.45" stop-color="#86c3db" />
          <stop offset="1" stop-color="#5eafcf" />
        </linearGradient>
        <linearGradient
          id="extreme-snow-d"
          x1="67.38"
          y1="5.93"
          x2="88.82"
          y2="43.07"
          xlinkHref="#extreme-snow-c"
        />
        <linearGradient
          id="extreme-snow-e"
          x1="123.38"
          y1="5.93"
          x2="144.82"
          y2="43.07"
          xlinkHref="#extreme-snow-c"
        />
        <symbol id="extreme-snow-g" viewBox="0 0 200.26 126.12">
          <path
            d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
            stroke="#848b98"
            stroke-miterlimit="10"
            fill="url(#extreme-snow-a)"
          />
        </symbol>
        <symbol id="extreme-snow-h" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#5b6472"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#extreme-snow-b)"
          />
        </symbol>
        <symbol id="extreme-snow-f" viewBox="0 0 398 222" overflow="visible">
          <use
            width="200.26"
            height="126.12"
            transform="translate(198 27)"
            xlinkHref="#extreme-snow-g"
          >
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-9 0; 9 0; -9 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </use>

          <use width="350" height="222" xlinkHref="#extreme-snow-h">
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-18 0; 18 0; -18 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </use>
        </symbol>
        <symbol id="extreme-snow-i" viewBox="0 0 156.2 49" overflow="visible">
          <g>
            <path
              d="M41.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L41.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,37.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L6.58,11A4.08,4.08,0,0,0,1,12.5,4,4,0,0,0,2.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L2.53,31A4,4,0,0,0,1,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L37.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,41.67,31ZM19.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,19.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#extreme-snow-c)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 24 24; 360 24 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="extreme-snow-t1"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin="0s; extreme-snow-t1.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="extreme-snow-s1"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin="0s; extreme-snow-s1.end+1s"
              dur="2s"
            />
          </g>

          <g>
            <path
              d="M97.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L97.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,93.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L62.58,11A4.08,4.08,0,0,0,57,12.5,4,4,0,0,0,58.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L58.53,31A4,4,0,0,0,57,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L93.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,97.67,31ZM75.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,75.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#extreme-snow-d)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 80 24; 360 80 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="extreme-snow-t2"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin="-.83s; extreme-snow-t2.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="extreme-snow-s2"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin="-.83s; extreme-snow-s2.end+1s"
              dur="2s"
            />
          </g>

          <g>
            <path
              d="M153.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L153.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,149.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L118.58,11A4.08,4.08,0,0,0,113,12.5,4,4,0,0,0,114.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L114.53,31A4,4,0,0,0,113,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,153.67,31ZM131.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,131.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#extreme-snow-e)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 136 24; 360 136 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="extreme-snow-t3"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin=".83s; extreme-snow-t3.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="extreme-snow-s3"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin=".83s; extreme-snow-s3.end+1s"
              dur="2s"
            />
          </g>
        </symbol>
      </defs>
      <use
        width="398"
        height="222"
        transform="translate(68.84 145)"
        xlinkHref="#extreme-snow-f"
      />
      <use
        width="156.2"
        height="49"
        transform="translate(177.9 337.5)"
        xlinkHref="#extreme-snow-i"
      />
    </svg>
  );
};
export const Fog = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="fog-a"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset="0.45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
        <linearGradient
          id="fog-b"
          x1="96"
          y1="-2.35"
          x2="168"
          y2="122.35"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#d4d7dd" />
          <stop offset="0.45" stop-color="#d4d7dd" />
          <stop offset="1" stop-color="#bec1c6" />
        </linearGradient>
        <linearGradient id="fog-c" y1="-50.35" x2="168" y2="74.35" xlinkHref="#fog-b" />
        <symbol id="fog-d" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#fog-a)"
          />
        </symbol>
        <symbol id="fog-e" viewBox="0 0 264 72" overflow="visible">
          <line
            x1="12"
            y1="60"
            x2="252"
            y2="60"
            fill="none"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="24"
            stroke="url(#fog-b)"
          >
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-24 0; 24 0; -24 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="12"
            y1="12"
            x2="252"
            y2="12"
            fill="none"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="24"
            stroke="url(#fog-c)"
          >
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="24 0; -24 0; 24 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </line>
        </symbol>
      </defs>
      <use
        width="350"
        height="222"
        transform="translate(81 145)"
        xlinkHref="#fog-d"
      />
      <use
        width="264"
        height="72"
        transform="translate(124 402)"
        xlinkHref="#fog-e"
      />
    </svg>
  );
};
export const Overcast = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="overcast-a"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset="0.45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
        <linearGradient
          id="overcast-b"
          x1="52.74"
          y1="9.62"
          x2="133.36"
          y2="149.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9ca3af" />
          <stop offset="0.45" stop-color="#9ca3af" />
          <stop offset="1" stop-color="#6b7280" />
        </linearGradient>
        <symbol id="overcast-d" viewBox="0 0 200.26 126.12">
          <path
            d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
            stroke="#848b98"
            stroke-miterlimit="10"
            fill="url(#overcast-b)"
          />
        </symbol>
        <symbol id="overcast-e" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#overcast-a)"
          />
        </symbol>
        <symbol id="overcast-c" viewBox="0 0 398 222" overflow="visible">
          <use
            width="200.26"
            height="126.12"
            transform="translate(198 27)"
            xlinkHref="#overcast-d"
          >
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-9 0; 9 0; -9 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </use>

          <use width="350" height="222" xlinkHref="#overcast-e">
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-18 0; 18 0; -18 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </use>
        </symbol>
      </defs>
      <use
        width="398"
        height="222"
        transform="translate(68.84 145)"
        xlinkHref="#overcast-c"
      />
    </svg>
  );
};
export const Partlycloudyday = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="partly-cloudy-a"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f3f7fe" />
          <stop offset="0.45" stopColor="#f3f7fe" />
          <stop offset="1" stopColor="#deeafb" />
        </linearGradient>
        <linearGradient
          id="partly-cloudy-b"
          x1="78"
          y1="63.35"
          x2="118"
          y2="132.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset="0.45" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <symbol id="partly-cloudy-d" viewBox="0 0 196 196">
          <circle
            cx="98"
            cy="98"
            r="40"
            stroke="#f8af18"
            strokeMiterlimit="10"
            strokeWidth="4"
            fill="url(#partly-cloudy-b)"
          />

          <path
            d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
            fill="none"
            stroke="#fbbf24"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="12"
          >
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="rotate"
              values="0 98 98; 45 98 98"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </symbol>
        <symbol id="partly-cloudy-e" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            strokeMiterlimit="10"
            strokeWidth="6"
            fill="url(#partly-cloudy-a)"
          />
        </symbol>
        <symbol id="partly-cloudy-c" viewBox="0 0 363 258">
          <use width="196" height="196" xlinkHref="#partly-cloudy-d" />
          <use
            width="350"
            height="222"
            transform="translate(13 36)"
            xlinkHref="#partly-cloudy-e"
          />    
        </symbol>
      </defs>
      <use
        width="363"
        height="258"
        transform="translate(68 109)"
        xlinkHref="#partly-cloudy-c"
      />
    </svg>
  );
};
export const Rain = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="rain-a"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f3f7fe" />
          <stop offset="0.45" stopColor="#f3f7fe" />
          <stop offset="1" stopColor="#deeafb" />
        </linearGradient>
        <linearGradient
          id="rain-b"
          x1="1381.32"
          y1="-1144.67"
          x2="1399.47"
          y2="-1097.39"
          gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0b65ed" />
          <stop offset="0.45" stopColor="#0a5ad4" />
          <stop offset="1" stopColor="#0950bc" />
        </linearGradient>
        <linearGradient
          id="rain-c"
          x1="1436.71"
          y1="-1137"
          x2="1454.86"
          y2="-1089.72"
          gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
          xlinkHref="#rain-b"
        />
        <linearGradient
          id="rain-d"
          x1="1492.12"
          y1="-1129.34"
          x2="1510.27"
          y2="-1082.06"
          gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
          xlinkHref="#rain-b"
        />
        <symbol id="rain-e" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            strokeMiterlimit="10"
            strokeWidth="6"
            fill="url(#rain-a)"
          />
        </symbol>
        <symbol id="rain-f" viewBox="0 0 129 57" overflow="visible">
          <path
            d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
            stroke="#0a5ad4"
            strokeMiterlimit="10"
            fill="url(#rain-b)"
            opacity="0"
          >
            <animateTransform
              id="rain-x1"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -60; 0 60"
              begin="0s; rain-x1.end+.33s"
              dur=".67s"
            />

            <animate
              id="rain-y1"
              attributeName="opacity"
              values="0; 1; 0"
              begin="0s; rain-y1.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
            />
          </path>

          <path
            d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
            stroke="#0a5ad4"
            strokeMiterlimit="10"
            fill="url(#rain-c)"
            opacity="0"
          >
            <animateTransform
              id="rain-x2"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -60; 0 60"
              begin=".33s; rain-x2.end+.33s"
              dur=".67s"
            />

            <animate
              id="rain-y2"
              attributeName="opacity"
              values="0; 1; 0"
              begin=".33s; rain-y2.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
            />
          </path>

          <path
            d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
            stroke="#0a5ad4"
            strokeMiterlimit="10"
            fill="url(#rain-d)"
            opacity="0"
          >
            <animateTransform
              id="rain-x3"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -60; 0 60"
              begin="-.33s; rain-x3.end+.33s"
              dur=".67s"
            />

            <animate
              id="rain-y3"
              attributeName="opacity"
              values="0; 1; 0"
              begin="-.33s; rain-y3.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
            />
          </path>
        </symbol>
      </defs>
      <use
        width="350"
        height="222"
        transform="translate(81 145)"
        xlinkHref="#rain-e"
      />
      <use
        width="129"
        height="57"
        transform="translate(191.5 343.5)"
        xlinkHref="#rain-f"
      />
    </svg>
  );
};
export const Raindrop = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="raindrop-a"
          x1="14.85"
          y1="42.34"
          x2="124.18"
          y2="231.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#3392d6" />
          <stop offset="0.45" stop-color="#3392d6" />
          <stop offset="1" stop-color="#2477b2" />
        </linearGradient>
        <symbol id="raindrop-b" viewBox="0 0 164 245.57">
          <path
            d="M82,3.57c-48.7,72-80,117-80,160.75s35.79,79.25,80,79.25,80-35.47,80-79.25S130.7,75.54,82,3.57Z"
            stroke="#2885c7"
            stroke-miterlimit="10"
            stroke-width="4"
            fill="url(#raindrop-a)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1 1; 1 .9; 1 1"
              dur="6s"
              calcMode="spline"
              keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
              repeatCount="indefinite"
            />
          </path>
        </symbol>
      </defs>
      <use
        width="164"
        height="245.57"
        transform="translate(174 132.43)"
        xlinkHref="#raindrop-b"
      />
    </svg>
  );
};
export const Raindrops = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="raindrops-a"
          x1="14.85"
          y1="42.34"
          x2="124.18"
          y2="231.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#3392d6" />
          <stop offset="0.45" stop-color="#3392d6" />
          <stop offset="1" stop-color="#2477b2" />
        </linearGradient>
        <symbol id="raindrops-b" viewBox="0 0 164 245.57">
          <path
            d="M82,3.57c-48.7,72-80,117-80,160.75s35.79,79.25,80,79.25,80-35.47,80-79.25S130.7,75.54,82,3.57Z"
            stroke="#2885c7"
            stroke-miterlimit="10"
            stroke-width="4"
            fill="url(#raindrops-a)"
          />
        </symbol>
      </defs>
      <use
        width="164"
        height="245.57"
        transform="translate(128 133.43)"
        xlinkHref="#raindrops-b"
      >
        <animateTransform
          attributeName="transform"
          additive="sum"
          type="scale"
          values="1 1; 1 .9; 1 1"
          dur="6s"
          calcMode="spline"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
        />
      </use>
      <use
        width="164"
        height="245.57"
        transform="translate(220 133.43)"
        xlinkHref="#raindrops-b"
      >
        <animateTransform
          attributeName="transform"
          additive="sum"
          type="scale"
          values="1 .9; 1 1; 1 .9"
          dur="6s"
          calcMode="spline"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
        />
      </use>
    </svg>
  );
};
export const Sleet = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="sleet-a"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset="0.45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
        <linearGradient
          id="sleet-b"
          x1="1399.27"
          y1="-1137.35"
          x2="1408.73"
          y2="-1112.71"
          gradientTransform="translate(-1188.61 1355.32) rotate(-9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0b65ed" />
          <stop offset="0.45" stop-color="#0a5ad4" />
          <stop offset="1" stop-color="#0950bc" />
        </linearGradient>
        <linearGradient
          id="sleet-c"
          x1="1454.58"
          y1="-1128.59"
          x2="1464.04"
          y2="-1103.95"
          xlinkHref="#sleet-b"
        />
        <linearGradient
          id="sleet-d"
          x1="1509.89"
          y1="-1119.83"
          x2="1519.35"
          y2="-1095.19"
          xlinkHref="#sleet-b"
        />
        <linearGradient
          id="sleet-e"
          x1="11.38"
          y1="5.93"
          x2="32.82"
          y2="43.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#86c3db" />
          <stop offset="0.45" stop-color="#86c3db" />
          <stop offset="1" stop-color="#5eafcf" />
        </linearGradient>
        <linearGradient
          id="sleet-f"
          x1="67.38"
          y1="5.93"
          x2="88.82"
          y2="43.07"
          xlinkHref="#sleet-e"
        />
        <linearGradient
          id="sleet-g"
          x1="123.38"
          y1="5.93"
          x2="144.82"
          y2="43.07"
          xlinkHref="#sleet-e"
        />
        <symbol id="sleet-h" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#sleet-a)"
          />
        </symbol>
        <symbol id="sleet-j" viewBox="0 0 156.2 49" overflow="visible">
          <g>
            <path
              d="M41.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L41.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,37.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L6.58,11A4.08,4.08,0,0,0,1,12.5,4,4,0,0,0,2.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L2.53,31A4,4,0,0,0,1,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L37.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,41.67,31ZM19.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,19.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#sleet-e)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 24 24; 360 24 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="sleet-t1"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin="0s; sleet-t1.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="sleet-s1"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin="0s; sleet-s1.end+1s"
              dur="2s"
            />
          </g>

          <g>
            <path
              d="M97.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L97.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,93.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L62.58,11A4.08,4.08,0,0,0,57,12.5,4,4,0,0,0,58.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L58.53,31A4,4,0,0,0,57,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L93.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,97.67,31ZM75.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,75.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#sleet-f)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 80 24; 360 80 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="sleet-t2"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin="-.83s; sleet-t2.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="sleet-s2"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin="-.83s; sleet-s2.end+1s"
              dur="2s"
            />
          </g>

          <g>
            <path
              d="M153.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L153.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,149.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L118.58,11A4.08,4.08,0,0,0,113,12.5,4,4,0,0,0,114.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L114.53,31A4,4,0,0,0,113,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,153.67,31ZM131.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,131.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#sleet-g)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 136 24; 360 136 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="sleet-t3"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin=".83s; sleet-t3.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="sleet-s3"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin=".83s; sleet-s3.end+1s"
              dur="2s"
            />
          </g>
        </symbol>
        <symbol id="sleet-i" viewBox="0 0 156.2 49" overflow="visible">
          <use width="156.2" height="49" xlinkHref="#sleet-j" />

          <path
            d="M22.1,38.5a8,8,0,0,1-8-8v-12a8,8,0,0,1,16,0v12A8,8,0,0,1,22.1,38.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#sleet-b)"
            opacity="0"
          >
            <animateTransform
              id="sleet-x1"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -32; 0 -32; 0 120;"
              begin="0s; sleet-x1.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />

            <animate
              id="sleet-y1"
              attributeName="opacity"
              values="0; 1; 0"
              begin="0s; sleet-y1.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />
          </path>

          <path
            d="M78.1,38.5a8,8,0,0,1-8-8v-12a8,8,0,0,1,16,0v12A8,8,0,0,1,78.1,38.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#sleet-c)"
            opacity="0"
          >
            <animateTransform
              id="sleet-x2"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -32; 0 -32; 0 120;"
              begin="1.34s; sleet-x2.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />

            <animate
              id="sleet-y2"
              attributeName="opacity"
              values="0; 1; 0"
              begin="1.34s; sleet-y2.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />
          </path>

          <path
            d="M134.1,38.5a8,8,0,0,1-8-8v-12a8,8,0,0,1,16,0v12A8,8,0,0,1,134.1,38.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#sleet-d)"
            opacity="0"
          >
            <animateTransform
              id="sleet-x3"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -32; 0 -32; 0 120;"
              begin=".67s; sleet-x3.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />

            <animate
              id="sleet-y3"
              attributeName="opacity"
              values="0; 1; 0"
              begin=".67s; sleet-y3.end+1s"
              dur="1s"
              keyTimes="0; .25; 1"
            />
          </path>
        </symbol>
      </defs>
      <use
        width="350"
        height="222"
        transform="translate(81 145)"
        xlinkHref="#sleet-h"
      />
      <use
        width="156.2"
        height="49"
        transform="translate(177.9 337.5)"
        xlinkHref="#sleet-i"
      />
    </svg>
  );
};
export const Snow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="snow-a"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset="0.45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
        <linearGradient
          id="snow-b"
          x1="11.38"
          y1="5.93"
          x2="32.82"
          y2="43.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#86c3db" />
          <stop offset="0.45" stop-color="#86c3db" />
          <stop offset="1" stop-color="#5eafcf" />
        </linearGradient>
        <linearGradient
          id="snow-c"
          x1="67.38"
          y1="5.93"
          x2="88.82"
          y2="43.07"
          xlinkHref="#snow-b"
        />
        <linearGradient
          id="snow-d"
          x1="123.38"
          y1="5.93"
          x2="144.82"
          y2="43.07"
          xlinkHref="#snow-b"
        />
        <symbol id="snow-e" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#snow-a)"
          />
        </symbol>
        <symbol id="snow-f" viewBox="0 0 156.2 49" overflow="visible">
          <g>
            <path
              d="M41.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L41.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,37.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L6.58,11A4.08,4.08,0,0,0,1,12.5,4,4,0,0,0,2.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L2.53,31A4,4,0,0,0,1,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L37.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,41.67,31ZM19.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,19.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#snow-b)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 24 24; 360 24 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="snow-t1"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin="0s; snow-t1.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="snow-s1"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin="0s; snow-s1.end+1s"
              dur="2s"
            />
          </g>

          <g>
            <path
              d="M97.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L97.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,93.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L62.58,11A4.08,4.08,0,0,0,57,12.5,4,4,0,0,0,58.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L58.53,31A4,4,0,0,0,57,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L93.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,97.67,31ZM75.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,75.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#snow-c)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 80 24; 360 80 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="snow-t2"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin="-.83s; snow-t2.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="snow-s2"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin="-.83s; snow-s2.end+1s"
              dur="2s"
            />
          </g>

          <g>
            <path
              d="M153.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L153.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,149.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L118.58,11A4.08,4.08,0,0,0,113,12.5,4,4,0,0,0,114.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L114.53,31A4,4,0,0,0,113,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,153.67,31ZM131.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,131.06,29.7Z"
              stroke="#86c3db"
              stroke-miterlimit="10"
              fill="url(#snow-d)"
              opacity="0"
            >
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="0 136 24; 360 136 24"
                dur="6s"
                repeatCount="indefinite"
              />

              <animate
                id="snow-t3"
                attributeName="opacity"
                values="0; 1; 1; 0"
                begin=".83s; snow-t3.end+1s"
                dur="2s"
                keyTimes="0; .17; .83; 1"
              />
            </path>

            <animateTransform
              id="snow-s3"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -36; 0 92;"
              begin=".83s; snow-s3.end+1s"
              dur="2s"
            />
          </g>
        </symbol>
      </defs>
      <use
        width="350"
        height="222"
        transform="translate(81 145)"
        xlinkHref="#snow-e"
      />
      <use
        width="156.2"
        height="49"
        transform="translate(177.9 337.5)"
        xlinkHref="#snow-f"
      />
    </svg>
  );
};
export const Snowflake = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <linearGradient
          id="snowflake-a"
          x1="192.02"
          y1="145.18"
          x2="319.98"
          y2="366.82"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#86c3db" />
          <stop offset="0.45" stop-color="#86c3db" />
          <stop offset="1" stop-color="#5eafcf" />
        </linearGradient>
      </defs>
      <path
        d="M372,295.22l-34.26-19.77a83.79,83.79,0,0,0-.08-38.86L372,216.78a24,24,0,1,0-24-41.56L313.67,195A81.44,81.44,0,0,0,280,175.58V136a24,24,0,0,0-48,0v39.62A84.08,84.08,0,0,0,198.28,195L164,175.22a24,24,0,1,0-24,41.56l34.26,19.77a83.79,83.79,0,0,0,.08,38.86L140,295.22a24,24,0,1,0,24,41.56L198.33,317A80.62,80.62,0,0,0,232,336.37V376a24,24,0,0,0,48,0V336.32A84,84,0,0,0,313.67,317L348,336.78a24,24,0,1,0,24-41.56Zm-134-8A36,36,0,1,1,287.2,274,36,36,0,0,1,238,287.18Z"
        stroke="#72b9d5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
        fill="url(#snowflake-a)"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1 1; .9 .9; 1 1; .9 .9; 1 1"
          dur="6s"
          calcMode="spline"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
        />

        <animateTransform
          attributeName="transform"
          additive="sum"
          type="translate"
          values="0 0; 25.75 25.75; 0 0; 25.75 25.75; 0 0"
          dur="6s"
          calcMode="spline"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
        />

        <animateTransform
          attributeName="transform"
          additive="sum"
          type="rotate"
          values="-6 256 256; 6 256 256; -6 256 256"
          dur="6s"
          calcMode="spline"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
export const Thunderstormrain = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="thunderstorm-rain-a"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset="0.45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
        <linearGradient
          id="thunderstorm-rain-b"
          x1="8.67"
          y1="17.07"
          x2="80.88"
          y2="142.14"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f7b23b" />
          <stop offset="0.45" stop-color="#f7b23b" />
          <stop offset="1" stop-color="#f59e0b" />
        </linearGradient>
        <linearGradient
          id="thunderstorm-rain-c"
          x1="1381.32"
          y1="-1144.67"
          x2="1399.47"
          y2="-1097.39"
          gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0b65ed" />
          <stop offset="0.45" stop-color="#0a5ad4" />
          <stop offset="1" stop-color="#0950bc" />
        </linearGradient>
        <linearGradient
          id="thunderstorm-rain-d"
          x1="1436.71"
          y1="-1137"
          x2="1454.86"
          y2="-1089.72"
          gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
          xlinkHref="#thunderstorm-rain-c"
        />
        <linearGradient
          id="thunderstorm-rain-e"
          x1="1492.12"
          y1="-1129.34"
          x2="1510.27"
          y2="-1082.06"
          gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
          xlinkHref="#thunderstorm-rain-c"
        />
        <symbol id="thunderstorm-rain-f" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#thunderstorm-rain-a)"
          />
        </symbol>
        <symbol id="thunderstorm-rain-g" viewBox="0 0 129 57" overflow="visible">
          <path
            d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#thunderstorm-rain-c)"
            opacity="0"
          >
            <animateTransform
              id="thunderstorm-rain-x1"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -60; 0 60"
              begin="0s; thunderstorm-rain-x1.end+.33s"
              dur=".67s"
            />

            <animate
              id="thunderstorm-rain-y1"
              attributeName="opacity"
              values="0; 1; 0"
              begin="0s; thunderstorm-rain-y1.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
            />
          </path>

          <path
            d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#thunderstorm-rain-d)"
            opacity="0"
          >
            <animateTransform
              id="thunderstorm-rain-x2"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -60; 0 60"
              begin=".33s; thunderstorm-rain-x2.end+.33s"
              dur=".67s"
            />

            <animate
              id="thunderstorm-rain-y2"
              attributeName="opacity"
              values="0; 1; 0"
              begin=".33s; thunderstorm-rain-y2.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
            />
          </path>

          <path
            d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
            stroke="#0a5ad4"
            stroke-miterlimit="10"
            fill="url(#thunderstorm-rain-e)"
            opacity="0"
          >
            <animateTransform
              id="thunderstorm-rain-x3"
              attributeName="transform"
              additive="sum"
              type="translate"
              values="0 -60; 0 60"
              begin="-.33s; thunderstorm-rain-x3.end+.33s"
              dur=".67s"
            />

            <animate
              id="thunderstorm-rain-y3"
              attributeName="opacity"
              values="0; 1; 0"
              begin="-.33s; thunderstorm-rain-y3.end+.33s"
              dur=".67s"
              keyTimes="0; .25; 1"
            />
          </path>
        </symbol>
        <symbol id="thunderstorm-rain-h" viewBox="0 0 102.66 186.75">
          <polygon
            points="34.77 2 2.77 98 34.77 98 18.77 178 98.78 66 50.77 66 82.78 2 34.77 2"
            stroke="#f6a823"
            stroke-miterlimit="10"
            stroke-width="4"
            fill="url(#thunderstorm-rain-b)"
          >
            <animate
              id="thunderstorm-rain-x1"
              attributeName="opacity"
              values="1; 1; 0; 1; 0; 1; 0; 1"
              begin="0s; thunderstorm-rain-x1.end+.67s"
              dur="1.33s"
              keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
            />
          </polygon>
        </symbol>
      </defs>
      <use
        width="350"
        height="222"
        transform="translate(81 145)"
        xlinkHref="#thunderstorm-rain-f"
      />
      <use
        width="129"
        height="57"
        transform="translate(191.5 343.5)"
        xlinkHref="#thunderstorm-rain-g"
      />
      <use
        width="102.66"
        height="186.74"
        transform="translate(205.23 291)"
        xlinkHref="#thunderstorm-rain-h"
      />
    </svg>
  );
};
export const Thunderstorm = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id="thunderstorm-a"
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset="0.45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
        <linearGradient
          id="thunderstorm-b"
          x1="8.67"
          y1="17.07"
          x2="80.88"
          y2="142.14"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f7b23b" />
          <stop offset="0.45" stop-color="#f7b23b" />
          <stop offset="1" stop-color="#f59e0b" />
        </linearGradient>
        <symbol id="thunderstorm-c" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width="6"
            fill="url(#thunderstorm-a)"
          />
        </symbol>
        <symbol id="thunderstorm-d" viewBox="0 0 102.66 186.75">
          <polygon
            points="34.77 2 2.77 98 34.77 98 18.77 178 98.78 66 50.77 66 82.78 2 34.77 2"
            stroke="#f6a823"
            stroke-miterlimit="10"
            stroke-width="4"
            fill="url(#thunderstorm-b)"
          >
            <animate
              id="thunderstorm-x1"
              attributeName="opacity"
              values="1; 1; 0; 1; 0; 1; 0; 1"
              begin="0s; thunderstorm-x1.end+.67s"
              dur="1.33s"
              keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
            />
          </polygon>
        </symbol>
      </defs>
      <use
        width="350"
        height="222"
        transform="translate(81 145)"
        xlinkHref="#thunderstorm-c"
      />
      <use
        width="102.66"
        height="186.74"
        transform="translate(205.23 291)"
        xlinkHref="#thunderstorm-d"
      />
    </svg>
  );
};
