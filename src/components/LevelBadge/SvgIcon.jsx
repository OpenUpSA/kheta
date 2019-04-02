import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


import iconLevels from './iconLevels.json';


const honeyBee = (
  <Fragment>
    <path d="M497 259c-15-25-48-60-82-86-26-19-61-40-90-37a75 75 0 0 0-38-100l11-10a15 15 0 1 0-21-22l-20 20-19-20a15 15 0 1 0-21 22l10 10a75 75 0 0 0-38 101c-29-5-65 16-92 36-34 26-68 61-82 86a105 105 0 0 0 151 139c16 27 44 46 76 51v48a15 15 0 0 0 30 0v-48c31-5 59-23 75-50 32 21 75 24 111 3 50-29 68-93 39-143zM257 60a45 45 0 0 1 39 68 99 99 0 0 0-77 0c-5-7-7-15-7-23 0-25 20-45 45-45zm-23 150h44l1 30h-46l1-30zm49 60l7 30h-68l6-30h55zm-1-90h-52l-8-20c11-7 23-10 35-10 11 0 23 3 34 9-4 6-7 13-9 21zm-69 150h86c4 11 8 22 13 30H200l13-30zm-41 19a75 75 0 0 1-102 27 75 75 0 0 1-29-102c10-18 40-51 74-77 16-12 57-39 75-29 17 11 14 58 12 79-6 42-20 84-30 102zm85 71c-24 0-46-12-60-30h120a75 75 0 0 1-60 30zm186-44c-33 19-75 9-96-17-20-25-33-81-37-112-3-24-6-77 18-81l12 1c13 3 32 12 57 30 34 26 63 59 74 77 20 36 8 81-28 102z" />
  </Fragment>
);


const wildHare = (
  <Fragment>
    <circle cx="316" cy="287" r="15" />
    <path d="M445 181c23-55 23-117 1-172a15 15 0 0 0-20-8 226 226 0 0 0-131 157 128 128 0 0 0-78 0A227 227 0 0 0 86 1a15 15 0 0 0-20 8 228 228 0 0 0 63 257v5l-2 14c-1 16-8 29-17 37a90 90 0 0 0 19 152c36 16 47-2 84 24a74 74 0 0 0 86 0c37-26 48-8 85-24a90 90 0 0 0 19-152h-1c-16-14-17-35-19-52v-4c27-23 49-52 62-85zM94 169c-17-42-19-90-6-133a199 199 0 0 1 101 135 128 128 0 0 0-52 62c-18-18-33-40-43-64zm290 176c18 15 26 39 20 63-4 16-16 31-33 38-28 13-45-3-89 28l-11 5v-66l26-25a15 15 0 1 0-22-22l-19 20-19-20a15 15 0 1 0-22 22l26 25v66l-11-5c-44-31-61-15-89-28-16-7-29-21-33-38-6-24 2-48 20-63 17-13 27-33 29-57l1-15a98 98 0 1 1 195 0c2 17 3 50 31 72zm-9-112a128 128 0 0 0-52-62A196 196 0 0 1 424 36a198 198 0 0 1-49 197z" />
  </Fragment>
);


export const warthog = (
  <Fragment>
    <circle cx="166" cy="227" r="15" />
    <circle cx="346" cy="227" r="15" />
    <circle cx="226" cy="437" r="15" />
    <circle cx="286" cy="437" r="15" />
    <path d="M286 242h-60a15 15 0 0 0 0 30h60a15 15 0 0 0 0-30zM271 302h-30a15 15 0 0 0 0 30h30a15 15 0 0 0 0-30z" />
    <path d="M497 0h-91c-33 0-61 21-71 50a163 163 0 0 0-158 0 75 75 0 0 0-71-50H15C7 0 0 7 0 15v90c0 41 34 75 75 75h17l-1 16v78a105 105 0 0 0-25 106 75 75 0 0 0 70 102h30c14 18 36 30 60 30h60c24 0 46-12 60-30h30a75 75 0 0 0 70-102 105 105 0 0 0-25-106v-78l-1-16h16c41 0 76-34 76-75V15c0-8-7-15-15-15zM30 30h76c23 0 41 17 45 38l-4 4c-12-8-26-12-41-12H30V30zm45 120c-25 0-45-20-45-45V90h76c7 0 14 2 20 4-13 17-23 36-29 56H75zm78 302h-17a45 45 0 0 1-15-87v42c0 8 7 15 15 15h17a76 76 0 0 0 0 30zm133 30h-60a45 45 0 0 1 0-90h60a45 45 0 0 1 0 90zm90-30h-17a75 75 0 0 0 0-30h17c8 0 15-7 15-15v-42a45 45 0 0 1-15 87zm45-105c-13-9-28-15-45-15-8 0-15 7-15 15v45h-15a75 75 0 0 0-60-30h-60c-24 0-46 12-60 30h-15v-45c0-8-7-15-15-15-17 0-32 6-45 15 0-21 9-41 25-55 3-3 5-7 5-12v-84c0-75 61-136 135-136s135 61 135 136v84c0 5 2 9 5 12 16 14 25 34 25 55zm61-242c0 24-21 45-46 45h-21c-6-20-16-39-29-56 6-2 13-4 20-4h76v15zm0-45h-76c-15 0-29 4-41 12l-4-4c4-21 22-38 45-38h76v30z" />
  </Fragment>
);


export const springbok = (
  <Fragment>
    <circle cx="152" cy="287" r="15" />
    <circle cx="227" cy="437" r="15" />
    <circle cx="287" cy="437" r="15" />
    <circle cx="361" cy="287" r="15" />
    <path d="M512 197c0-8-7-15-15-15H383l-2-1c40-51 42-122 7-174a15 15 0 0 0-25 16c29 44 25 104-9 144a294 294 0 0 0-195 0c-35-40-39-100-10-144a15 15 0 0 0-25-16c-35 52-32 124 7 174l-1 1H15c-8 0-15 7-15 15 0 21 10 40 29 54 17 14 39 21 63 21-1 31 9 63 28 91 24 36 30 47 32 65 3 47 42 84 89 84h31c46 0 85-37 89-84 1-18 8-29 32-65 19-28 28-60 28-91 50 0 91-34 91-75zM96 242c-17 1-35-4-49-14-6-5-10-10-13-16h72c-4 9-8 19-10 30zm160-61h1c62 0 94 18 97 18l8 5a142 142 0 0 0-92 130v17c1 7-5 14-14 14s-14-7-14-14v-17a142 142 0 0 0-92-130c15-10 56-23 106-23zm112 165c-24 36-35 53-37 79-2 32-28 57-59 57h-31c-31 0-57-25-59-57-3-26-13-43-37-79a124 124 0 0 1-14-116c19 5 37 15 51 30 19 21 30 48 30 77v14c0 25 21 44 44 44 24 0 45-19 45-44v-14c0-29 10-56 30-77 14-15 32-25 51-30a117 117 0 0 1 8 29c4 29-4 60-22 87zm52-104h-3c-3-11-6-21-11-30h72c-8 17-31 30-58 30z" />
  </Fragment>
);


const zebra = (
  <Fragment>
    <circle cx="316" cy="256" r="15" />
    <circle cx="196" cy="256" r="15" />
    <path d="M226 421c-8 0-15 7-15 15s7 16 15 16 15-8 15-16-7-15-15-15zM286 421c-8 0-15 7-15 15s7 16 15 16 15-8 15-16-7-15-15-15z" />
    <path d="M502 38c-1-7-6-12-13-13a134 134 0 0 0-133 69c-11-8-24-15-36-20l4-20c5-28-16-54-45-54h-46c-29 0-50 26-45 54l4 20c-12 5-25 12-36 20A134 134 0 0 0 23 25c-7 1-12 6-13 13a134 134 0 0 0 88 142c-5 15-7 30-7 46v15c0 56 25 88 47 121 9 12 13 26 13 41v33c0 41 34 76 75 76h60c41 0 75-35 75-76v-33c0-15 4-29 13-41 22-33 47-65 47-121v-15c0-16-2-31-7-46a135 135 0 0 0 88-142zm-269-8h46c10 0 17 9 15 18l-17 86a22 22 0 0 1-42 0l-17-86c-2-9 5-18 15-18zM70 127c-20-19-31-46-31-73a104 104 0 0 1 95 61c-10 11-19 23-25 37-15-5-28-14-39-25zm261 309c0 25-21 46-45 46h-60c-24 0-45-21-45-46v-24l1-1a104 104 0 0 1 148 0l1 1v24zm60-195h-15c-8 0-15 7-15 15s7 15 15 15h12c-3 10-6 20-11 30h-61a15 15 0 0 0 0 30h42l-9 14c-7 10-11 20-14 31a134 134 0 0 0-158 0c-3-11-7-21-14-31l-9-14h42a15 15 0 0 0 0-30h-61c-5-10-8-20-11-30h12a15 15 0 0 0 0-30h-15v-15l1-15h71a15 15 0 0 0 0-30h-64c12-34 37-62 69-77l7 36a52 52 0 0 0 102-1l7-35c32 15 57 42 69 77h-66a15 15 0 0 0 0 30h73l1 15v15zm12-89c-6-14-15-26-25-37a104 104 0 0 1 95-61 104 104 0 0 1-70 98z" />
  </Fragment>
);


const lion = (
  <Fragment>
    <circle cx="316" cy="169" r="15" />
    <circle cx="196" cy="169" r="15" />
    <path d="M397 150l-7-17a75 75 0 0 0-109-29 45 45 0 0 1-50 0 75 75 0 0 0-109 29c-21 41-17 90 8 129l21 31v29a45 45 0 0 0 31 43c6 33 35 58 70 58h8c35 0 64-25 70-58a45 45 0 0 0 31-43v-29l21-31c22-33 27-74 15-112zM260 393h-8c-19 0-34-12-39-29l8-4 35-23 35 23 8 4c-5 17-21 29-39 29zm-18-140a15 15 0 0 1 28 0l-14 14-14-14zm115-8l-24 35-2 8v34c0 9-6 12-8 14l-7 1c-3 0-6 0-8-2l-37-25v-15l25-26c3-3 5-6 5-11a45 45 0 0 0-90 1c0 4 2 7 4 10l26 26v15l-37 25c-3 2-5 2-8 2l-7-1c-3-2-8-5-8-14v-34l-3-8-23-35a99 99 0 0 1-6-99c12-24 43-32 65-17 26 17 58 17 84 0a45 45 0 0 1 65 17c15 31 14 69-6 99z" />
    <path d="M442 71c-6-5-13-9-19-12l13-3a15 15 0 0 0 3-29c-89-41-149-29-183-3-34-26-94-38-183 3a15 15 0 0 0 3 29l13 3c-6 3-13 7-19 12C14 114-1 186 0 255a15 15 0 0 0 26 10s5-6 12-10c-2 13-3 32-2 54 5 58 30 107 72 143a15 15 0 0 0 24-9l2-7 1 3a176 176 0 0 0 124 73 176 176 0 0 0 119-76l2 7a15 15 0 0 0 24 9c42-36 67-85 72-143 1-22 0-41-2-54 4 2 8 6 12 10a15 15 0 0 0 26-10c1-69-14-141-70-184zm8 149c-7 3-11 11-9 18 0 1 26 100-38 173l-7-31a15 15 0 0 0-29 2c0 1-6 76-111 100-44-10-76-30-95-58a96 96 0 0 1-16-42c0-7-6-13-13-14-8-1-15 5-16 12l-7 31c-25-28-39-63-43-104-3-38 5-68 5-69 2-7-2-15-10-18-10-3-21-1-30 4 4-59 22-101 56-128 29-23 59-25 59-25a15 15 0 0 0 3-30l-18-4c71-20 104 7 114 17a15 15 0 0 0 22 0c10-10 43-37 114-17l-18 4a15 15 0 0 0 3 30s30 2 58 24c34 26 53 70 57 129-9-5-20-7-31-4z" />
  </Fragment>
);


const rhino = (
  <Fragment>
    <circle cx="223" cy="437" r="15" />
    <circle cx="283" cy="437" r="15" />
    <circle cx="343" cy="226" r="15" />
    <circle cx="163" cy="226" r="15" />
    <path d="M487 115c0-20-8-39-22-53-6-6-15-6-21 0l-53 53c-25-33-64-54-108-54h-4l-10-49c-1-7-7-12-14-12s-14 5-15 12l-10 49h-7c-42 0-80 20-105 51L68 62a15 15 0 0 0-21 0 75 75 0 0 0 42 127l-1 7v144c0 28 11 54 31 74l30 29c3 39 35 69 74 69h60c40 0 72-30 75-69l30-29c20-20 30-46 30-74V196v-6c39-4 69-36 69-75zM93 159a45 45 0 0 1-34-64l43 43-9 21zm161-68l44 217a45 45 0 1 1-89 0l45-217zm134 249c0 20-7 39-22 53l-33 33c-3 3-5 7-5 11 0 25-20 45-45 45h-60c-24 0-45-20-45-45 0-4-1-8-4-11l-34-33a75 75 0 0 1-22-53V196c0-58 48-105 105-105h1l-44 211a75 75 0 1 0 147 0L285 91c57 1 103 48 103 105v144zm25-180c-1-7-4-13-6-19l46-46a45 45 0 0 1-40 65z" />
  </Fragment>
);


const elephant = (
  <Fragment>
    <path d="M453 254c13-22 24-39 37-55A105 105 0 0 0 359 41C333 12 295 0 256 0c-40 0-78 12-104 41A105 105 0 0 0 21 198c12 15 23 33 35 55 14 26 39 43 67 46-31 47-71 62-86 81-11 14-6 27-2 33 7 12 23 13 37 11 35-5 93-33 128-85l10 159c0 8 7 14 15 14h61c8 0 14-6 15-14l9-157c32 45 85 75 124 83 15 2 34 2 42-11 4-6 9-19-3-33-15-19-56-34-88-82 28-3 54-20 68-44zM82 239c-12-24-24-42-37-59a75 75 0 0 1 90-113c-10 19-15 42-15 68a191 191 0 0 0 30 105l-11 30h-4c-22 0-42-12-53-31zM64 395c22-19 79-47 109-129 7 6 14 12 21 16-20 72-97 110-130 113zm230-134c-8 2-12 9-11 17l-11 204h-33l-13-208c0-6-4-11-8-13-41-20-68-70-68-126 0-29 7-50 18-66 24-34 66-39 88-39 31 0 105 11 105 105 0 22-4 43-12 62-12 29-31 52-55 64zm152 134c-35-3-110-42-131-112 8-4 15-10 21-16 31 82 87 110 110 128zm-73-126h-4l-10-28a194 194 0 0 0 31-106c1-26-5-49-14-69a75 75 0 0 1 90 114c-13 17-25 36-39 59a61 61 0 0 1-54 30z" />
    <circle cx="195" cy="150" r="15" />
    <circle cx="316" cy="150" r="15" />
  </Fragment>
);


const iconsList = {
  honeyBee,
  wildHare,
  warthog,
  springbok,
  zebra,
  lion,
  rhino,
  elephant,
};


const iconKeys = Object.keys(iconLevels);
const iconValues = iconKeys.map(key => iconLevels[key]);


const calcIconKey = points => iconKeys.reduce(
  (result, key, index) => (points >= iconValues[index] ? key : result),
  null,
);

const SvgIcon = ({ points, size }) => {
  const iconKey = calcIconKey(points);

  return (
    <svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size === 'small' ? 24 : 60}
      height={size === 'small' ? 24 : 60}
      fill="#5F5F5F"
    >
      {iconsList[iconKey]}
    </svg>
  );
};


export default SvgIcon;


SvgIcon.propTypes = {
  points: PropTypes.number,
  size: PropTypes.number,
};


SvgIcon.defaultProps = {
  points: 0,
  size: 0,
};
