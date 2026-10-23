export default function Time({
    color = 'currentColor',
    width = 55,
    height = 55,
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill={color}
            width={width}
            height={height}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
        >
            <rect
                xmlns="http://www.w3.org/2000/svg"
                x="76.732"
                y="46.587"
                width="9.364"
                height="5.245"
                style={{ fill: 'inherit' }}
            ></rect>
            <rect
                xmlns="http://www.w3.org/2000/svg"
                x="50.507"
                y="71.545"
                width="5.245"
                height="9.364"
                style={{ fill: 'inherit' }}
            ></rect>
            <rect
                xmlns="http://www.w3.org/2000/svg"
                x="67.55"
                y="27.483"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.132 59.8931)"
                width="9.364"
                height="5.245"
                style={{ fill: 'inherit' }}
            ></rect>
            <rect
                xmlns="http://www.w3.org/2000/svg"
                x="67.55"
                y="65.692"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 69.4617 -31.0665)"
                width="9.364"
                height="5.245"
                style={{ fill: 'inherit' }}
            ></rect>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M38.17,63.372l12.437-12.442V25.783h7.953v28.293c-0.553,0.553-14.762,14.922-14.762,14.922L38.17,63.372z"
                style={{ fill: 'inherit' }}
            ></path>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M55.125,6.69v7.507c19.4,0,35.185,15.785,35.185,35.188c0,19.402-15.785,35.187-35.185,35.187  c-17.803,0-32.552-13.298-34.86-30.481l5.355,5.282l5.309-5.309L16.261,39.396L1.555,54.065l5.309,5.309l5.783-5.783  c2.12,21.573,20.361,38.489,42.48,38.489c23.539,0,42.693-19.153,42.693-42.694C97.818,25.844,78.666,6.69,55.125,6.69z"
                style={{ fill: 'inherit' }}
            ></path>
        </svg>
    );
}
