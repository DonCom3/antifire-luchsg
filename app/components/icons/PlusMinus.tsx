export default function PlusMinus({
    color = 'currentColor',
    width = 55,
    height = 55,
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            width={width}
            height={height}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
        >
            <switch
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: 'inherit' }}
            >
                <foreignObject
                    requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
                    x="0"
                    y="0"
                    width="1"
                    height="1"
                    style={{ fill: 'inherit' }}
                ></foreignObject>
                <g>
                    <g>
                        <path
                            d="M76.7,57.1c11.5,0,20.8-9.3,20.8-20.9s-9.3-20.9-20.8-20.9s-20.8,9.3-20.8,20.9S65.1,57.1,76.7,57.1z M69.2,33.3h14.8     c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.9-2.9,2.9H69.2c-1.6,0-2.9-1.3-2.9-2.9S67.6,33.3,69.2,33.3z"
                            style={{ fill: 'inherit' }}
                        ></path>
                        <path
                            d="M23.3,15.4c-11.5,0-20.8,9.3-20.8,20.9s9.3,20.9,20.8,20.9c11.5,0,20.8-9.3,20.8-20.9S34.9,15.4,23.3,15.4z M31.4,39.1     h-5.1v5.1c0,1.6-1.3,2.9-2.9,2.9c-1.6,0-2.9-1.3-2.9-2.9v-5.1h-5.1c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9h5.1v-5.1     c0-1.6,1.3-2.9,2.9-2.9c1.6,0,2.9,1.3,2.9,2.9v5.1h5.1c1.6,0,2.9,1.3,2.9,2.9S33,39.1,31.4,39.1z"
                            style={{ fill: 'inherit' }}
                        ></path>
                        <path
                            d="M93.9,65.3H59.4c-1.6,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9h34.5c1.6,0,2.9-1.3,2.9-2.9     C96.8,66.6,95.5,65.3,93.9,65.3z"
                            style={{ fill: 'inherit' }}
                        ></path>
                        <path
                            d="M93.9,78.8H59.4c-1.6,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9h34.5c1.6,0,2.9-1.3,2.9-2.9     C96.8,80.1,95.5,78.8,93.9,78.8z"
                            style={{ fill: 'inherit' }}
                        ></path>
                        <path
                            d="M40.6,65.3H6.1c-1.6,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9h34.5c1.6,0,2.9-1.3,2.9-2.9C43.5,66.6,42.2,65.3,40.6,65.3     z"
                            style={{ fill: 'inherit' }}
                        ></path>
                        <path
                            d="M40.6,78.8H6.1c-1.6,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9h34.5c1.6,0,2.9-1.3,2.9-2.9C43.5,80.1,42.2,78.8,40.6,78.8     z"
                            style={{ fill: 'inherit' }}
                        ></path>
                    </g>
                </g>
            </switch>
        </svg>
    );
}
