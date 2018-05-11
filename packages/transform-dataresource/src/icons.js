import * as React from "react";
import { SVGWrapper } from "@nteract/octicons";
import {
  XYFrame,
  OrdinalFrame,
  ResponsiveOrdinalFrame,
  ResponsiveXYFrame,
  ResponsiveNetworkFrame
} from "semiotic";

export const BoxplotIcon = (props: any) => (
  <SVGWrapper width={16} height={16} viewBox="0 0 16 16" outerProps={props}>
    <title>Summary Diagram</title>
    <path
      fill="lightgray"
      stroke="black"
      d="M 9.2300893,12.746467 15.329337,12.746467 M 0.73981357,15.376296 6.8390612,15.376296 M 3.9346579,0.6634694 3.9346579,15.376296 M 0.73981357,0.6634694 6.8390612,0.6634694 M 12.424932,1.5163867 12.424932,12.817543 M 9.2300893,1.5163867 15.329337,1.5163867 M 9.3149176,3.8522966 15.454941,3.8522966 15.454941,10.067428 9.3149176,10.067428 Z M 0.63101533,5.4042547 6.771038,5.4042547 6.771038,13.040916 0.63101533,13.040916 Z"
    />
  </SVGWrapper>
);

export const TreeIcon = (props: any) => (
  <SVGWrapper width={16} height={16} viewBox="0 0 16 16" outerProps={props}>
    <title>Dendrogram</title>
    <path
      fill="lightgray"
      stroke="black"
      d="M 5.3462352,16.86934 5.3462352,11.568531 M 5.0378073,11.186463 10.665375,16.453304 M 5.5794816,11.049276 -0.04808655,16.316116 M 10.903757,11.840357 10.903757,6.5395482 M 10.722225,5.9958343 16.349791,11.262675 M 10.758529,6.1997119 5.1309613,11.466552 M 5.3851096,6.1997401 5.3851096,0.06818774 M 5.3488028,0.96685111 10.976372,6.2336914 M 5.3851095,0.89889187 -0.24245868,6.1657322"
    />
  </SVGWrapper>
);

export const NetworkIcon = (props: any) => (
  <SVGWrapper width={16} height={16} viewBox="0 0 16 16" outerProps={props}>
    <title>Network</title>
    <path
      fill="lightgray"
      stroke="black"
      d="M 12.272948,3.9756652 9.2580839,6.8311579 M 3.7415227,3.9107679 6.435657,6.5066704 M 3.9981069,12.087859 6.6280954,9.6866496 M 12.208802,12.217654 9.0656456,9.556855 M 0.58721146,13.461599 A 2.0038971,2.0273734 0 0 0 2.591109,15.488973 2.0038971,2.0273734 0 0 0 4.5950056,13.461599 2.0038971,2.0273734 0 0 0 2.591109,11.434226 2.0038971,2.0273734 0 0 0 0.58721146,13.461599 Z M 11.483612,2.5370283 A 2.0038971,2.0273734 0 0 0 13.487509,4.5644013 2.0038971,2.0273734 0 0 0 15.491407,2.5370283 2.0038971,2.0273734 0 0 0 13.487509,0.50965432 2.0038971,2.0273734 0 0 0 11.483612,2.5370283 Z M 15.491407,13.461599 A 2.0038971,2.0273734 0 0 1 13.487509,15.488973 2.0038971,2.0273734 0 0 1 11.483612,13.461599 2.0038971,2.0273734 0 0 1 13.487509,11.434226 2.0038971,2.0273734 0 0 1 15.491407,13.461599 Z M 9.9298938,8.1089002 A 2.0038971,2.0273734 0 0 1 7.9259965,10.136275 2.0038971,2.0273734 0 0 1 5.9220989,8.1089002 2.0038971,2.0273734 0 0 1 7.9259965,6.0815273 2.0038971,2.0273734 0 0 1 9.9298938,8.1089002 Z M 4.5950056,2.5370283 A 2.0038971,2.0273734 0 0 1 2.591109,4.5644013 2.0038971,2.0273734 0 0 1 0.58721146,2.5370283 2.0038971,2.0273734 0 0 1 2.591109,0.50965432 2.0038971,2.0273734 0 0 1 4.5950056,2.5370283 Z"
    />
  </SVGWrapper>
);

export const ScatterplotIcon = (props: any) => (
  <SVGWrapper width={16} height={16} viewBox="0 0 16 16" outerProps={props}>
    <title>Scatterplot</title>
    <path
      fill="lightgray"
      stroke="black"
      d="M 6.2333524,7.1483631 A 2.1883047,2.1883047 0 0 1 4.0450478,9.3366678 2.1883047,2.1883047 0 0 1 1.8567431,7.1483631 2.1883047,2.1883047 0 0 1 4.0450478,4.9600585 2.1883047,2.1883047 0 0 1 6.2333524,7.1483631 Z M 12.201456,4.0316868 A 2.1883047,2.1883047 0 0 1 10.013151,6.2199914 2.1883047,2.1883047 0 0 1 7.8248465,4.0316868 2.1883047,2.1883047 0 0 1 10.013151,1.8433821 2.1883047,2.1883047 0 0 1 12.201456,4.0316868 Z M 14.787634,11.45866 A 2.1883047,2.1883047 0 0 1 12.599329,13.646965 2.1883047,2.1883047 0 0 1 10.411024,11.45866 2.1883047,2.1883047 0 0 1 12.599329,9.2703555 2.1883047,2.1883047 0 0 1 14.787634,11.45866 Z M 0.06631226,-0.01336003 0.06631226,16.100519 16.113879,16.100519"
    />
  </SVGWrapper>
);

export const LineChartIcon = (props: any) => (
  <SVGWrapper width={16} height={16} viewBox="0 0 16 16" outerProps={props}>
    <title>Line Chart</title>
    <path
      fill="lightgray"
      stroke="black"
      d="M 1.98856,5.3983376 3.9789255,1.5485605 6.8981275,9.2481137 10.215403,6.6815963 15.257662,12.071285 M 0.46261318,0.00862976 0.46261318,15.600225 16.518227,15.600225"
    />
  </SVGWrapper>
);

export const HexbinIcon = (props: any) => (
  <SVGWrapper width={16} height={16} viewBox="0 0 16 16" outerProps={props}>
    <title>Hexbin</title>
    <path
      fill="lightgray"
      stroke="black"
      d="M 7.6646201,7.248835 10.200286,8.7365914 12.71271,7.2956277 12.71271,4.2993354 10.200286,2.8583717 7.6481891,4.3220885 Z M 2.5260861,7.248835 5.0617524,8.7365914 7.5741798,7.2956277 7.5741798,4.2993354 5.0617524,2.8583717 2.509655,4.3220885 Z M 10.151008,11.430063 12.686686,12.917818 15.199098,11.476854 15.199098,8.4805611 12.686686,7.0395985 10.134577,8.5033165 Z M 5.0124743,11.430063 7.5481406,12.917818 10.060567,11.476854 10.060567,8.4805611 7.5481406,7.0395985 4.9960421,8.5033165 Z M 0.59322509,-0.02976587 0.59322509,16.053058 16.562547,16.008864"
    />
  </SVGWrapper>
);

export const BarChartIcon = (props: any) => (
  <SVGWrapper width={16} height={16} viewBox="0 0 16 16" outerProps={props}>
    <title>Bar Chart</title>
    <path
      fill="lightgray"
      stroke="black"
      d="M 11.58591,8.3025699 15.255735,8.3025699 15.255735,15.691481 11.58591,15.691481 Z M 6.2401471,3.973457 9.9358173,3.973457 9.9358173,15.626376 6.2401471,15.626376 Z M 0.533269,0.53717705 4.6376139,0.53717705 4.6376139,15.583893 0.533269,15.583893 Z"
    />
  </SVGWrapper>
);
