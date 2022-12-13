export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const CC = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 10080 5040"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <defs>
        <path
          id="Star7"
          d="M0,-360 69.421398,-144.155019 281.459334,-224.456329 155.988466,-35.603349 350.974048,80.107536 125.093037,99.758368 156.198146,324.348792 0,160 -156.198146,324.348792 -125.093037,99.758368 -350.974048,80.107536 -155.988466,-35.603349 -281.459334,-224.456329 -69.421398,-144.155019z"
        />
        <path
          id="Star5"
          d="M0,-210 54.859957,-75.508253 199.721868,-64.893569 88.765275,28.841586 123.434903,169.893569 0,93.333333 -123.434903,169.893569 -88.765275,28.841586 -199.721868,-64.893569 -54.859957,-75.508253z"
        />
      </defs>
      <rect width="10080" height="5040" fill="#008000" />
      <circle cx="5040" cy="2520" r="1050" fill="#ffe000" />
      <circle cx="5367.4" cy="2520" r="864" fill="#008000" />
      <circle cx="1730" cy="1470" r="1100" fill="#ffe000" />
      <path
        fill="#802000"
        stroke="#7b3100"
        stroke-width="23.333"
        d="m1654.1,2299.4,274.67,0s12.398-25.178-2.7658-37.767-74.229-15.36-58.271-59.892c32.807-91.555,37.385-63.326,57.985-280.77s30.518-558.49,30.518-558.49h-39.674s7.6296,106.05-15.259,244.15-29.755,150.3-54.933,256.35-28.992,115.21-51.881,177.01-25.178,64.852-61.037,122.07c-35.859,57.222-22.889,35.859-42.726,70.192-9.9186,17.166-22.126,12.589-28.802,25.082-6.6759,12.494-7.8204,42.058-7.8204,42.058z"
      />
      <path
        fill="#008000"
        d="m1863.7,668.6c2.2817,42.661-2.0069,99.138-19.688,145.1-17.928,51.216-37.423,102.27-36.458,155.31-28.502,9.6945-57.877-61.678-85.312-19.688,20.624,58.016,68.239,103.95,100.86,156.22,5.5021,16.205,52.438,58.518,25.281,68.358-68.547-23.46-85.162-110.31-127.68-163.05-49.38-88.757-141.44-151.49-244-155.82-38.524,1.0094-163.78-9.548-131.19,56.419,47.997,32.632,107.14,53.91,154.53,90.537,35.31,3.3032,99.31,62.248,95.579,84.52-62.102-25.153-91.169-55.299-158.08-81.758-90.658-35.014-216.06-13.954-266.25,76.021-9.3572,23.433-23.172,91.731,6.2547,98.238,34.384-53.685,83.569-113.7,156.45-97.6,57.244,4.4692-63.877,106.64-17.544,86.084,14.681-6.5147,48.583-28.769,72.102-31.093,23.518-2.324,36.653,15.282,54.497,17.718,35.688,4.8718,45.515,19.833,42.207,28.537-3.9027,10.269-15.241,1.5013-51.52,13.004-18.14,5.7513-27.615,21.692-48.774,28.989-21.158,7.2976-65.173,7.8148-81.621,1.3436-57.547-24.996-151.89-20.645-169.83,51.468-0.016,31.711-28.236-3.5038-41.278,10.196-9.7795,34.603-12.309,70.132-63.633,66.99-31.155,32.684-63.06,66.527-102.62,89.781,23.215,53.284,115.2-53.516,110.9-8.4838-40.21,54.832,20.689,66.37,47.348,24.166,45.088-47.64,100.93-105.63,168.21-57.618,32.044,30.169,50.664-15.951,73.857-13.481,14.612,37.475,32.998,1.8444,49.583-8.75,27.15-3.3824,19.511,33.91,51.771,10.938,64.293-42.551,143.39-6.796,206.2-48.197,66.852-30.458,9.3858,24.532-9.0659,46.028-29.373,56.97-3.8997,131.76-67.613,167.14-25.593,67.895,30.237,157.4-26.707,207.63-8.2836,31.496,73.234,27.889,96.113,40.832,40.09,1.5876-1.7229-91.758,38.054-104.27,53.344,33.019,50.846-59.049,39.831-87.447,5.1712-64.552,8.8142-135.13,40.892-193.6,34.102-71.662,65.666,29.186,27.491,57.558-21.685,65.896-53.25,148.36-3.9423,209.64,14.211,3.1803,25.879,37.625,44.279,48.212s43.531-2.6843,48.118-34.022c23.601-94.369,11.712-195.85,45.415-287.63,23.788-28.43,56.603-4.584,71.355,21.559,47.23,54.833,80.43,123.38,137.61,168.56,52.063,24.362,98.106,61.211,122.1,114.81-0.3209,41.353,117.45,47.692,82.258,1.7272-33.768-44.747-11.488-89.504,22.715-119.26,18.318,4.5181,12.904-28.289-1.4583-15.312-22.995-5.4244-24.466-47.512,7.4967-27.507,53.836,17.379-4.197-38.962-23.655-40.69-45.52-28.215-97.819-60.676-120.2-109.72,59.256,0.6043,120.77,32.564,181.32,12.74,48.538-24.937,97.769,2.0801,114.72,44.864,37.52-5.9873,21.524-43.614,0-56.146,27.443-11.325,46.422-34.805,13.147-55.515-17.574-22.934,23.566-62.052-27.001-60.422,1.6515-38.627-13.556-73.973-55.66-87.318-42.178-35.717-165.95,52.62-162.36-27.89-12.471-43.818,50.278-5.8539,67.812-27.708,18.118-46.194-86.337-41.686-51.87-77.5,22.511-14.494,128.15-35.314,45.306-50.82-41.347,11.364-76.832,2.9489-109.37-17.513-29.657,49.603-114.34-26.938-99.252,61.251-11.585,33.23-87.278,119.57-107.76,53.423,17.422-51.845,107.1-68.797,79.291-138.7-4.2682-43.636-40.446,7.5887-57.49,4.335-8.6308-27.162,26.103-59.178,50.312-65.625,48.038,36.948,49.493-46.614,95.178-39.816,33.355-7.4109-10.771-21.718-20.074-27.996,9.1407-24.416,60.346-36.892,10.136-58.094-44.302-32.872-77.138,32.72-113.68,36.218-35.072-39.595,31.842-58.628,50.312-79.479,0.9929-15.543-39.017-4.6894-26.979-18.229,10.456-18.69,81.301-20.081,48.125-48.125-49.965-17.153-114.44-12.876-162.38,9.3461-30.203,9.7774-39.089,78.069-65.122,75.237-12.24-30.398,3.9853-90.372-37.917-99.167zm236.25,667.19c38.072-6.447,0.8081,57.818-17.5,56.875,1.6178-23.092-55.065-20.869-19.897-40.988,11.405-7.3645,24.112-12.982,37.397-15.887z"
      />
      <g fill="#ffe000">
        <use xlinkHref="#Star7" x="7560" y="4200" />
        <use xlinkHref="#Star7" x="6300" y="2205" />
        <use xlinkHref="#Star7" x="7560" y="840" />
        <use xlinkHref="#Star7" x="8680" y="1869" />
        <use xlinkHref="#Star5" x="8064" y="2730" />
      </g>
    </svg>
  );
};
