import { IFish } from '@/components/Fish/components/types';
import { rotate } from 'next/dist/server/lib/squoosh/impl';

const Fish3 = ({ color = '#fff', size = '20px', flip = false }: IFish) => {
  return (
    <div
      style={{ fontSize: size, transform: flip ? 'scale(-1, 1)' : undefined }}
    >
      <svg fill={color} width="1em" height="1em" viewBox="0 0 563.787 563.787">
        <g>
          <g>
            <path
              d="M522.697,299.679c13.88-10.49,25.688-19.413,38.038-28.744c-1.648-2.281-2.497-4.243-3.979-5.374
              c-26.703-20.388-53.346-40.865-80.294-60.931c-26.104-19.437-56.994-25.949-88.075-32.102c-5.618-1.114-10.882-5.141-15.77-8.588
              c-12.089-8.535-23.321-18.434-36.01-25.883c-5.459-3.207-13.676-1.706-22.428-2.509c-0.098,0.404-0.804,3.256-1.726,6.989
              c-4.035-2.469-7.446-4.554-11.359-6.948c-0.244,4.247-0.452,7.833-0.722,12.497c-3.582-0.661-6.504-1.204-9.775-1.807
              c-1.311,4.088-2.636,8.229-4.224,13.17c-4.197-1.774-7.491-3.17-11.326-4.794c-1.188,4.056-2.366,8.07-3.807,12.991
              c-4.635-1.428-8.36-2.579-12.791-3.945c-0.849,11.473-7.107,11.844-11.685,9.176c-6.997,2.737-10.902,4.451-14.929,5.806
              c-14.17,4.77-28.531,9.013-42.542,14.202c-17.871,6.622-35.472,13.97-55.786,22.041c1.342,9.065,3.011,20.322,4.753,32.057
              c-15.386,2.427-31.298,1.057-46.087-10.375c-16.071-12.428-32.771-24.284-50.278-34.537c-10.865-6.361-23.745-9.278-35.72-13.742
              c-0.567,1.232-1.134,2.464-1.701,3.692c2.57,6.471,6.173,12.742,7.479,19.458c2.326,11.958,3.786,24.149,4.61,36.312
              c0.722,10.669-0.763,21.51,0.225,32.134c1.673,18.014-2.375,34.569-10.025,50.579c-1.75,3.664-3.345,7.401-6.765,15.011
              c11.481-2.216,20.714-2.183,28.201-5.781c21.269-10.225,42.95-20.277,62.391-33.46c27.14-18.401,52.22-7.903,78.079,0.946
              c0.763,0.262,1.044,1.926,2.497,4.839c-25.296,1.755-23.097,19.27-22.334,36.622c0.318,7.263-1.604,14.619-2.676,23.31
              c15.369,0.212,29.16-6.933,42.656-14.606c6.32-3.595,11.473-9.69,20.123-5.929c1.604,0.697,4.924-0.959,6.671-2.443
              c10.273-8.74,20.11-6.59,31.877-1.89c30.914,12.342,63.416,15.9,96.598,12.954c3.149-0.277,6.345-0.037,13.056-0.037
              c-15.263,6.822-12.57,15.644-8.801,25.872c4.831,13.112,7.956,26.854,12.392,42.33c3.391-3.844,7.479-6.761,9.184-10.706
              c7.716-17.83,15.549-35.692,21.633-54.105c2.333-7.066,4.859-9.755,11.954-10.987c37.969-6.581,75.994-13.007,113.665-21.064
              c13.97-2.987,27.111-10.062,40.424-15.749c2.555-1.094,4.158-4.419,6.198-6.716c-2.763-2.109-5.305-5.594-8.327-6.075
              C545.79,301.29,535.933,300.849,522.697,299.679z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Fish3;
