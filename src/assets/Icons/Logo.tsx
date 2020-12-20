import React, {Component} from 'react';
import Svg, {Defs, G, Mask, Path, Use} from 'react-native-svg';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {size, color} = this.props;
    const proportion = 24 / 164;
    const width = size || 24;
    const height = size * proportion || 24 * proportion;

    return (
      <Svg width={width} height={height} viewBox="0 0 164 24">
        <Defs>
          <Path id="a" d="M.51.287h20.103v20.157H.509z">
          </Path>
          <Path id="c" d="M.02.434h20.104V23.11H.021z">
          </Path>
          <Path id="e" d="M0 .287h20.103v20.157H0z">
          </Path>
        </Defs>
        <G fill="none" fill-rule="evenodd">
          <Path fill="#4BADA9" d="M138.208 3.409h-15.077a2.517 2.517 0 0 0-2.513 2.52 2.517 2.517 0 0 0 2.513 2.519h5.025v12.599a2.517 2.517 0 0 0 2.513 2.519 2.516 2.516 0 0 0 2.514-2.52V8.449h5.025a2.516 2.516 0 0 0 2.513-2.52 2.516 2.516 0 0 0-2.513-2.52">
          </Path>
          <G transform="translate(142.724 3.122)">
              <Mask id="b" fill="#fff">
                <Use xlinkHref="#a" />
              </Mask>
              <Path fill="#4BADA9" d="M10.561 15.405a5.032 5.032 0 0 1-5.025-5.039c0-2.783 2.25-5.04 5.025-5.04 2.776 0 5.026 2.257 5.026 5.04s-2.25 5.04-5.026 5.04m0-15.12C5.01.287.51 4.8.51 10.367s4.5 10.078 10.052 10.078c5.551 0 10.052-4.512 10.052-10.078S16.113.286 10.56.286" mask="url(#b)">
              </Path>
          </G>
          <Path fill="#4BADA9" d="M85.438 18.527a5.032 5.032 0 0 1-5.026-5.04c0-2.783 2.25-5.04 5.026-5.04 2.775 0 5.025 2.257 5.025 5.04 0 2.784-2.25 5.04-5.025 5.04m0-15.119c-5.551 0-10.052 4.513-10.052 10.08 0 5.566 4.5 10.078 10.052 10.078a9.971 9.971 0 0 0 5.247-1.494 2.51 2.51 0 0 0 2.291 1.494 2.517 2.517 0 0 0 2.514-2.52v-7.558c0-5.567-4.501-10.08-10.052-10.08m15.077 5.04a2.516 2.516 0 0 0 2.513-2.52 2.516 2.516 0 0 0-2.513-2.52 2.516 2.516 0 0 0-2.513 2.52 2.516 2.516 0 0 0 2.513 2.52m15.077 2.52a2.516 2.516 0 0 0-2.513 2.52 5.032 5.032 0 0 1-5.025 5.039 5.032 5.032 0 0 1-5.026-5.04 2.516 2.516 0 0 0-2.513-2.52 2.517 2.517 0 0 0-2.513 2.52c0 5.567 4.5 10.079 10.052 10.079 5.55 0 10.051-4.512 10.051-10.078a2.516 2.516 0 0 0-2.513-2.52m0-7.559a2.516 2.516 0 0 0-2.513 2.52 2.516 2.516 0 0 0 2.513 2.519 2.516 2.516 0 0 0 2.513-2.52 2.516 2.516 0 0 0-2.513-2.52">
          </Path>
          <Path fill="#333" d="M70.36 3.409a2.516 2.516 0 0 0-2.513 2.52v15.118a2.516 2.516 0 0 0 2.514 2.519 2.517 2.517 0 0 0 2.513-2.52V5.93a2.517 2.517 0 0 0-2.513-2.52M32.667 18.527a5.032 5.032 0 0 1-5.025-5.04c0-2.783 2.25-5.04 5.025-5.04a5.033 5.033 0 0 1 5.026 5.04c0 2.784-2.25 5.04-5.026 5.04m0-15.119c-5.55 0-10.051 4.513-10.051 10.08 0 5.566 4.5 10.078 10.051 10.078 5.552 0 10.052-4.512 10.052-10.078 0-5.567-4.5-10.08-10.052-10.08">
          </Path>
          <G transform="translate(45.21 .455)">
              <Mask id="d" fill="#fff">
                <Use xlinkHref="#c" />
              </Mask>
              <Path fill="#333" d="M10.072 18.072a5.032 5.032 0 0 1-5.025-5.04c0-2.782 2.25-5.04 5.025-5.04 2.776 0 5.026 2.258 5.026 5.04 0 2.784-2.25 5.04-5.026 5.04m0-15.118a9.97 9.97 0 0 0-5.025 1.359v-1.36A2.517 2.517 0 0 0 2.534.434 2.517 2.517 0 0 0 .02 2.954v10.08c0 5.566 4.5 10.078 10.051 10.078 5.552 0 10.052-4.512 10.052-10.078 0-5.567-4.5-10.08-10.052-10.08" mask="url(#d)" />
          </G>
          <G transform="translate(0 3.122)">
              <Mask id="f" fill="#fff">
                <Use xlinkHref="#e" />
              </Mask>
              <Path fill="#333" d="M13.82.287a6.233 6.233 0 0 0-3.768 1.268A6.233 6.233 0 0 0 6.282.287C2.812.287 0 3.107 0 6.587v11.338a2.517 2.517 0 0 0 2.513 2.52 2.516 2.516 0 0 0 2.513-2.52V6.588a1.256 1.256 0 1 1 2.512 0v11.337a2.516 2.516 0 0 0 2.514 2.52 2.516 2.516 0 0 0 2.513-2.52L12.563 6.56a1.259 1.259 0 0 1 1.255-1.233 1.26 1.26 0 0 1 1.259 1.262v11.337a2.516 2.516 0 0 0 2.513 2.52 2.516 2.516 0 0 0 2.513-2.52V6.587c0-3.48-2.812-6.3-6.282-6.3" mask="url(#f)" />
          </G>
        </G>
      </Svg>
    );
  }
}