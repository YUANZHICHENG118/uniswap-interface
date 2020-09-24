import React, { useMemo } from 'react'
import styled, {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
  DefaultTheme
} from 'styled-components'
import { useIsDarkMode } from '../state/user/hooks'
import { Text, TextProps } from 'rebass'
import { Colors } from './styled'

export * from './components'

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ? '#C3C5CB' : '#565A69',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#565A69' : '#C3C5CB',
    text5: darkMode ? '#2C2F36' : '#EDEEF2',

    // backgrounds / greys
    bg1: darkMode ? '#212429' : '#FFFFFF',
    bg2: darkMode ? '#2C2F36' : '#F7F8FA',
    bg3: darkMode ? '#40444F' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#6C7284' : '#888D9B',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',

    //primary colors
    primary1: darkMode ? '#2172E5' : '#ff007a',
    primary2: darkMode ? '#3680E7' : '#FF8CC3',
    primary3: darkMode ? '#4D8FEA' : '#FF99C9',
    primary4: darkMode ? '#376bad70' : '#F6DDE8',
    primary5: darkMode ? '#153d6f70' : '#FDEAF1',

    // color text
    primaryText1: darkMode ? '#6da8ff' : '#ff007a',

    // secondary colors
    secondary1: darkMode ? '#2172E5' : '#ff007a',
    secondary2: darkMode ? '#17000b26' : '#F6DDE8',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',

    // other
    red1: '#FF6871',
    red2: '#F82D3A',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E'

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',
  }
}

export function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },

    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useIsDarkMode()

  const themeObject = useMemo(() => theme(darkMode), [darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const TYPE = {
  main(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text2'} {...props} />
  },
  link(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  black(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text1'} {...props} />
  },
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={24} {...props} />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={20} {...props} />
  },
  subHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  blue(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  yellow(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'yellow1'} {...props} />
  },
  darkGray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text3'} {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'bg3'} {...props} />
  },
  italic(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} fontStyle={'italic'} color={'text2'} {...props} />
  },
  error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={500} color={error ? 'red1' : 'text2'} {...props} />
  }
}

export const FixedGlobalStyle = createGlobalStyle`
html, input, textarea, button {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.018em;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'Inter var', sans-serif;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`

export const ThemedGlobalStyle = createGlobalStyle`
html {
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg2};
  @font-face {
  font-family: 'Kaushan Script';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src:  url(https://fonts.gstatic.com/s/kaushanscript/v9/vm8vdRfvXFLG3OLnsO15WYS5DG72wNJVMJ8br5Y.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
}

body {
  min-height: 100vh;
  background-position: 0 -30vh;
  background-repeat: no-repeat;
  background-color: #193dc0;
}
.h1, h1 {
    font-size: 2.5rem;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
  .banner_image_right_big {
    min-width: 700px;
  }
}
@media only screen and (min-width: 991px) and (max-width: 1199px) {
  .banner_text h1,
  .banner_text_s2 h1 {
    font-size: 3.2rem;
  }
  .pr_box h6 {
    font-size: 14px;
  }
  .pr_box p {
    font-size: 13px;
  }
  .roadmap_list p {
    font-size: 14px;
  }
  .banner_rounded_bg {
    height: 560px;
    min-width: 460px;
    top: -10%;
    width: 460px;
  }
  .dl_lan li {
    margin-top: 10px;
    width: 50%;
  }
  .dl_lan li:nth-child(-n + 2) {
    margin-top: 0;
  }
  .team_wrap .team_info p {
    font-size: 12px;
  }
  .team_wrap .social_team a {
    font-size: 16px;
    padding: 0 3px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .border_right .col-md-4:nth-child(4) {
    border: 0;
  }
  .half-info li {
    float: none;
    width: 100%;
  }
}
@media only screen and (max-width: 1600px) {
  .banner_rounded_shape::before,
  .banner_rounded_shape::after {
    height: 927px;
    width: 1119px;
  }
}
@media only screen and (max-width: 1440px) {
  header {
    padding: 25px 0;
  }
  .navbar-expand-lg .navbar-nav > li {
    padding: 0 10px;
  }
  .navbar-expand-lg .nav_btn > li {
    padding: 0;
  }
  header .navbar-nav a {
    font-size: 15px;
  }
  .banner_image_right {
    min-width: 600px;
  }
  .banner_image_left {
    left: -7%;
    min-width: 600px;
  }
  .mobile_shape {
    background-size: 40% auto;
  }
  .banner_rouded_bg {
    border-radius: 0 0 250px;
  }
  .banner_rounded_shape::before,
  .banner_rounded_shape::after {
    width: 65%;
    height: 100%;
  }
}
@media only screen and (max-width: 1199px) {
  section,
  .top_footer {
    padding: 80px 0;
  }
  section.small_pb {
    padding-bottom: 40px;
  }
  section.small_pt {
    padding-top: 40px;
  }
  .res_lg_mb_20 {
    margin-bottom: 20px;
  }
  .res_lg_mb_30 {
    margin-bottom: 30px;
  }
  .res_lg_mb_40 {
    margin-bottom: 40px;
  }
  .res_lg_mb_50 {
    margin-bottom: 50px;
  }
  .res_lg_mt_20 {
    margin-top: 20px;
  }
  .res_lg_mt_30 {
    margin-top: 30px;
  }
  .res_lg_mt_40 {
    margin-top: 40px;
  }
  .res_lg_mt_50 {
    margin-top: 50px;
  }
  .text_lg_center {
    text-align: center;
  }
  .large_divider {
    height: 80px;
  }
  .small_divider {
    height: 40px;
  }
  .navbar-brand img {
    max-width: 170px;
  }
  .nav_btn li {
    margin-left: 0;
  }
  .navbar-expand-lg .navbar-nav > li {
    padding: 0 5px;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    font-size: 13px;
  }
  .navbar-expand-lg .navbar-nav.nav_btn > li {
    margin-left: 0;
  }
  .navbar-expand-lg .navbar-nav.nav_btn a.btn {
    padding: 10px 20px;
  }
  .navbar-expand-lg .navbar-nav.nav_btn a {
    font-size: 14px;
    padding: 0;
  }
  .section_banner.banner_shape {
    padding-bottom: 160px;
  }
  .banner_rouded_bg {
    border-radius: 0 0 200px;
  }
  .banner_image_right {
    min-width: 100%;
  }
  .banner_rounded_shape::before,
  .banner_rounded_shape::after {
    width: 75%;
  }
  .banner_section_s2 {
    padding-bottom: 100px;
    padding-top: 120px;
  }
  .about_section {
    padding: 30px 20px 30px 60px;
  }
  .about_img img {
    margin-left: 25px;
  }
  .about_shape::before {
    border-radius: 0 100px 100px 0;
    right: 0;
  }
  .about_img_shape::before {
    border-radius: 100px 0 0 100px;
    margin-left: 0;
  }
  .tk_counter_inner {
    padding: 15px;
  }
  .mobileapp .btn {
    padding: 0 15px;
  }
  .mobileapp .btn span {
    margin-left: -10px;
  }
  .contact_box {
    padding: 30px;
  }
  .sidebar_block {
    padding-left: 0;
  }
  .action-content h3 {
    font-size: 24px;
  }
  .post-details article {
    margin-bottom: 40px;
    padding-bottom: 40px;
  }
  .tags li a {
    font-size: 14px;
    padding: 4px 12px;
  }
  .tab_content .nav-item {
    padding: 0 5px;
  }
  .tab-link {
    font-size: 14px;
    padding: 8px 10px;
  }
  .token_rt_value {
    padding: 15px;
  }
  .token_rtinfo {
    margin-top: -50px;
    padding: 10px;
  }
  .token_detail {
    padding-left: 0;
  }
  .tk_counter_inner {
    padding: 0;
  }
  .token_detail li,
  .token_info_table .table td {
    padding: 10px;
  }
  .doc_list li a {
    font-size: 15px;
    padding: 15px;
  }
  .list_none.doc_list span i {
    font-size: 18px;
  }
  .doc_list {
    margin: 10px -10px 0;
  }
  .doc_list li {
    margin-top: 20px;
    width: 33.33%;
  }
  .banner_image_right_big {
    min-width: 500px;
  }
  .token_sale_box {
    padding: 10px 5px 5px;
  }
  .token_sale_box h5,
  .token_sale_box_white h5 {
    font-size: 16px;
  }
  .chart_text h4 {
    font-size: 20px;
    line-height: 26px;
  }
  .chart_text {
    padding: 0 40px;
  }
  .chart_canvas {
    margin-right: 20px;
    max-width: 250px;
  }
  .chart_legend {
    border-width: 3px;
    height: 25px;
    width: 25px;
  }
  .doc_dropdown > a,
  .doc_dropdown > a:hover {
    font-size: 14px;
    padding: 10px 15px;
  }
  .newslattter_section {
    padding: 30px 20px;
  }
  .progress_col {
    width: 38%;
  }
  .banner_token {
    padding: 20px 10px;
  }
  .team_box_s3 {
    padding: 20px 10px;
  }
  .team_info p {
    font-size: 14px;
  }
  .mfp-close-btn-in .mfp-close {
    right: 0;
    top: -5px;
    background: 0 0;
  }
  .contact_box_s3 {
    padding: 15px;
  }
  .footer_title_s2 {
    font-size: 16px;
  }
  .token_gradiant::before,
  .token_gradiant::after {
    height: 550px;
    width: 550px;
  }
  .banner_vr_social li {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 0;
  }
}
@media only screen and (min-width: 991px) {
  .navbar-expand-lg .navbar-nav li:hover > .dropdown-menu {
    display: block;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu .dropdown-menu {
    display: none;
    left: 100%;
    top: 0;
  }
  .navbar-nav .dropdown-menu {
    display: none;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu li:hover > a {
    background-color: #3231a8;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu .dropdown-toggler {
    padding-right: 35px;
  }
  .dropdown-menu .dropdown-toggler::after {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .v_blue .navbar-expand-lg .navbar-nav .dropdown-menu li:hover > a,
  .v_navy_blue .navbar-expand-lg .navbar-nav .dropdown-menu li:hover > a {
    background-color: #020a5d;
  }
  .v_dark .navbar-expand-lg .navbar-nav .dropdown-menu li:hover > a,
  .v_light_dark .navbar-expand-lg .navbar-nav .dropdown-menu li:hover > a {
    background-color: #161d3e;
  }
  .v_blue_light .navbar-expand-lg .navbar-nav .dropdown-menu li:hover > a,
  .v_royal_blue .navbar-expand-lg .navbar-nav .dropdown-menu li:hover > a {
    background-color: #1431b0;
  }
  .v_light_purple .navbar-expand-lg .navbar-nav .dropdown-menu li:hover > a {
    background-color: #5a2ca0;
  }
  .v_cyan_blue .navbar-expand-lg .navbar-nav .dropdown-menu li:hover > a {
    background-color: #224996;
  }
}
@media only screen and (max-width: 991px) {
  .h1,
  h1 {
    font-size: 2rem;
  }
  .h3,
  h3 {
    font-size: 1.5rem;
  }
  p,
  .footer_title {
    margin-bottom: 20px;
  }
  .res_md_mb_20 {
    margin-bottom: 20px;
  }
  .res_md_mb_30 {
    margin-bottom: 30px;
  }
  .res_md_mb_40 {
    margin-bottom: 40px;
  }
  .res_md_mb_50 {
    margin-bottom: 50px;
  }
  .res_md_mt_20 {
    margin-top: 20px;
  }
  .res_md_mt_30 {
    margin-top: 30px;
  }
  .res_md_mt_40 {
    margin-top: 40px;
  }
  .res_md_mt_50 {
    margin-top: 50px;
  }
  .res_md_pr_15 {
    padding-right: 15px !important;
  }
  .res_md_pl_15 {
    padding-left: 15px !important;
  }
  .text_md_center {
    text-align: center;
  }
  .d_md_none {
    display: none;
  }
  .text_md_center.title_border h4::before {
    margin: 0 auto;
  }
  header.fixed-top {
    position: absolute;
  }
  .navbar-brand img {
    max-width: 100%;
  }
  .navbar-toggler {
    border: 0;
    font-size: 24px;
  }
  .navbar-nav {
    -webkit-animation-name: none;
    animation-name: none;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
    float: left;
    text-align: center;
    width: 50%;
  }
  .navbar-nav:last-child {
    border: 0;
  }
  .navbar-expand-lg .navbar-nav > li {
    -webkit-animation-name: none;
    animation-name: none;
    padding: 0;
  }
  .navbar-expand-lg .navbar-nav.nav_btn > li {
    padding-bottom: 10px;
  }
  .navbar-nav .dropdown-menu {
    border: 0;
    text-align: center;
  }
  .navbar-nav .dropdown-menu .dropdown-menu {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .navbar-expand-lg .navbar-nav > li > .nav-link.active::before {
    bottom: 0;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    display: inline-block;
    padding: 5px 0;
    text-align: center;
  }
  header {
    height: auto;
    padding: 10px 0;
  }
  header.nav-fixed {
    height: auto;
  }
  .nav_btn li {
    display: inline-block;
  }
  .section_banner {
    padding: 150px 0 80px;
  }
  .banner_full_height {
    height: auto;
  }
  .banner_rouded_bg {
    border-radius: 0 0 150px;
  }
  .banner_text h1 {
    margin-bottom: 20px;
  }
  .banner_img {
    text-align: center;
  }
  .banner_rounded_shape::before,
  .banner_rounded_shape::after {
    height: 85%;
    width: 180%;
  }
  .about_section {
    padding: 30px;
  }
  .about_img {
    padding: 20px;
    display: block !important;
  }
  .about_img img {
    margin-left: 0;
  }
  .about_shape::before {
    border-radius: 0 0 50px 50px;
    left: 0;
    right: 0;
  }
  .about_img_shape::before {
    border-radius: 50px 50px 0 0;
    margin-left: 0;
    margin-right: 0;
    -moz-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
  }
  .mobile_shape {
    background-image: none;
  }
  .sidebar_block {
    margin-top: 40px;
  }
  .roadmap_list {
    text-align: left;
    margin-bottom: 0;
  }
  .single_roadmap {
    padding: 0 0 20px 50px;
    position: relative;
  }
  .roadmap_list .col-lg:nth-child(2n + 1) .single_roadmap {
    padding: 0 0 20px 50px;
    position: relative;
  }
  .single_roadmap::after {
    content: normal;
  }
  .single_roadmap h6 {
    position: static;
    top: auto;
  }
  .single_roadmap .roadmap_icon {
    margin: 0;
    top: 10px;
  }
  .roadmap_list .col-lg:nth-child(2n) .single_roadmap .roadmap_icon {
    bottom: auto;
    top: 10px;
  }
  .roadmap_list .col-lg:nth-child(2n) .single_roadmap::before {
    bottom: auto;
    top: 42px;
  }
  .single_roadmap::before {
    height: calc(100% - 40px);
    left: 10px;
    top: 42px;
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  .banner_rounded_bg {
    height: 500px;
    min-width: 500px;
    top: -12%;
    width: 500px;
  }
  .chart_list_info li {
    padding: 10px;
  }
  .section_breadcrumb {
    padding: 100px 0 50px;
  }
  .box_counter i {
    font-size: 50px;
  }
  .box_counter .counter {
    font-size: 30px;
  }
  .pr_title h3 {
    font-size: 20px;
  }
  .token_dt {
    height: auto;
    padding: 20px;
  }
  .token_list_shape::before {
    content: normal;
  }
  .token_list_info {
    border-radius: 0 0 10px 10px;
    padding: 40px;
  }
  .token_dt .tk_counter_inner {
    max-width: 100%;
    padding: 0;
  }
  .app_right_content .app_icon {
    float: none;
    margin-bottom: 10px;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
  }
  .app_right_content .app_desc {
    text-align: center;
  }
  .app_icon {
    float: none;
    margin-bottom: 10px;
    margin-right: 0;
    text-align: center;
  }
  .app_desc {
    text-align: center;
  }
  .app_content li:last-child .app_desc p {
    margin: 0;
  }
  .bg_navy_blue.video_bg {
    height: 100px;
  }
  .video_text i {
    font-size: 40px;
    height: 75px;
    line-height: 80px;
    width: 75px;
  }
  .video_text span {
    padding-top: 15px;
  }
  .banner_image_right_big {
    min-width: 100%;
  }
  .box_wrapper {
    margin: 0;
    padding: 15px 10px;
  }
  .chart_canvas {
    margin: 0 auto 20px;
  }
  .chart_legend {
    margin: 0 auto 10px;
  }
  .chart_desc_list li {
    width: 33.33%;
    text-align: center;
    padding: 0 10px;
  }
  .newslattter_section {
    padding: 20px;
  }
  .token_countdown {
    padding: 10px;
  }
  .token_countdown .counter_box .tk_counter {
    font-size: 24px;
  }
  .presale_status {
    padding: 15px 20px;
  }
  .vertical_social {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    display: table;
    margin: 40px auto 0;
    padding: 0 10px;
  }
  .vertical_social li {
    padding: 5px 10px;
  }
  .partner_logo {
    padding: 10px 5px;
  }
  .currency_icon li i {
    font-size: 18px;
    margin-right: 8px;
  }
  .currency_icon li {
    margin-right: 10px;
  }
  .token_col,
  .progress_col,
  .btn_col {
    width: 100%;
    padding: 0 5px;
  }
  .review_box {
    margin-top: 30px;
  }
  .contact_box_s3 h5 {
    font-size: 16px;
  }
  .contact_box_s3 p {
    margin: 5px 0;
    font-size: 14px;
  }
  .contact_info_box {
    padding: 30px 10px;
  }
  .banner_vr_social {
    width: 100%;
  }
  .banner_partner_logo {
    padding: 10px;
  }
}
@media only screen and (max-width: 767px) {
  section,
  .top_footer {
    padding: 50px 0;
  }
  section.small_pt {
    padding-top: 25px;
  }
  section.small_pb {
    padding-bottom: 25px;
  }
  .box_inner h4 {
    font-size: 20px;
  }
  .res_sm_mb_20 {
    margin-bottom: 20px;
  }
  .res_sm_mb_30 {
    margin-bottom: 30px;
  }
  .res_sm_mb_40 {
    margin-bottom: 40px;
  }
  .res_sm_mb_50 {
    margin-bottom: 50px;
  }
  .res_sm_mt_20 {
    margin-top: 20px;
  }
  .res_sm_mt_30 {
    margin-top: 30px;
  }
  .res_sm_mt_40 {
    margin-top: 40px;
  }
  .res_sm_mt_50 {
    margin-top: 50px;
  }
  .res_sm_pt_0 {
    padding-top: 0;
  }
  .res_sm_pb_0 {
    padding-bottom: 0;
  }
  .text_sm_center {
    text-align: center;
  }
  .large_divider {
    height: 50px;
  }
  .small_divider {
    height: 25px;
  }
  .small_space {
    margin-top: 0;
  }
  .title_default_light h4,
  .title_default_dark h4,
  .title_blue_dark h4,
  .title_dark h4,
  .title_purple_dark h4 {
    font-size: 24px;
    margin-bottom: 25px;
  }
  .section_banner {
    padding: 100px 0 50px;
  }
  .banner_section_s2 {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .section_wave,
  .section_wave2 {
    background-size: contain;
    height: 34px;
  }
  .section_banner.banner_shape {
    padding-bottom: 80px;
  }
  .pr_box {
    margin-top: 30px;
  }
  .box_wrap h4,
  .work_inner h4 {
    margin-bottom: 10px;
  }
  .work_icon {
    margin-top: 0;
  }
  .box_inner {
    padding: 15px;
  }
  .box_wrap {
    margin-top: 15px;
  }
  .benefit_wrap .col-md-4:nth-child(-n + 3) .benefit_box {
    margin-top: 30px;
  }
  .benefit_wrap .col-md-4:nth-child(-n + 2) .benefit_box {
    margin-top: 0;
  }
  .roadmap {
    padding: 0 40px;
  }
  .roadmap .owl-prev {
    left: 0;
  }
  .roadmap .owl-next {
    right: 0;
  }
  .copyright,
  .footer_menu {
    text-align: center;
  }
  .scrollup {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
    right: 10px;
    width: 40px;
  }
  .angle_top {
    border-top: 50px solid #fff;
  }
  .angle_bottom {
    border-bottom: 50px solid #fff;
  }
  .bg_light .angle_top {
    border-top: 50px solid #f7fafc;
  }
  .bg_light .angle_bottom {
    border-bottom: 50px solid #f7fafc;
  }
  .contact_info.info_contact li {
    float: left;
    width: 100%;
  }
  .app_list li {
    margin-bottom: 20px;
  }
  .mobileapp_icon {
    height: 50px;
    padding: 10px 0;
    width: 50px;
  }
  .mobileapp_icon i {
    font-size: 28px;
  }
  .mobileapp_desc {
    padding-left: 15px;
  }
  .mobileapp_desc h5 {
    font-size: 16px;
    line-height: normal;
  }
  .mobileapp_desc p {
    line-height: normal;
  }
  .testimonial_wrap img {
    height: 100px;
    max-width: 100px;
  }
  .blog_content_detail .blog_title,
  .title_cyan_dark h4 {
    font-size: 24px;
  }
  .blog_slider .blog_item {
    margin: 0;
  }
  .owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: 10px;
  }
  .team_img img {
    border: 5px solid #fff;
  }
  .team_img::before {
    margin: 5px;
  }
  .comment-title {
    margin-bottom: 25px;
  }
  .dl_lan img {
    display: table;
    margin: 0 auto;
  }
  .timeline_wrap::before {
    left: 10px;
  }
  .timeline_icon {
    left: 0;
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  .timeline_block {
    padding-left: 40px;
    margin-bottom: 20px;
  }
  .timeline_content {
    text-align: left;
    width: 100%;
  }
  .timeline_block .timeline_content::before {
    border-color: transparent #071890 transparent transparent;
    border-width: 9px 9px 9px 0;
    left: -9px;
    right: auto;
  }
  .tm_date,
  .timeline_block:nth-child(2n) .tm_date {
    color: #fff;
    display: block;
    left: 0;
    margin-bottom: 5px;
    position: static;
    text-align: left;
  }
  .timeline_block:nth-child(2n) .timeline_content {
    float: none;
  }
  .border_right .col-6:nth-child(2n + 1) {
    border: 0;
  }
  .token_rtinfo {
    margin-top: 50px;
  }
  .video_wrap::before {
    bottom: 20px;
    left: -20px;
    right: -20px;
    top: -20px;
  }
  .bg_navy_blue.video_bg {
    height: 80px;
  }
  .doc_list li {
    width: 50%;
  }
  .list_dash {
    margin-bottom: 20px;
  }
  .tab_nav_s2 li.nav-item {
    padding: 0 15px;
  }
  .tab_nav_s3 li.nav-item a {
    padding: 6px 15px;
  }
  .presale_status {
    padding: 0 20px 5px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 0;
  }
  .vertical_social {
    margin-top: 25px;
  }
  .waveWrapper {
    height: 50px;
  }
  .waveMiddle,
  .waveTop {
    background-size: 50% 50px;
  }
  .faq_question .card-header a {
    font-size: 15px;
  }
  .logo_border {
    height: 80px;
  }
  .partner_logo {
    margin-bottom: -50px;
  }
  .half_tab .col-md-6:last-child {
    margin-top: 10px;
  }
  .chat_title {
    display: block;
  }
  .token_gradiant::before,
  .token_gradiant::after {
    height: 520px;
    width: 520px;
  }
  .token_circle::before {
    height: 480px;
    width: 480px;
  }
  .contact_map2 {
    height: 300px;
  }
  .banner_partner_logo {
    margin-top: 0;
  }
}
@media only screen and (max-width: 640px) {
  p,
  .footer_title {
    margin-bottom: 15px;
  }
  .banner_text h1 {
    margin-bottom: 15px;
  }
  .work_box {
    float: none;
    padding-left: 0;
    width: 100%;
  }
  .work_box:nth-child(2n) {
    position: static;
    top: 0;
  }
}
@media only screen and (max-width: 580px) {
  .large_space {
    margin-top: 30px;
  }
  .res_xs_mb_20 {
    margin-bottom: 20px;
  }
  .res_xs_mb_30 {
    margin-bottom: 30px;
  }
  .res_xs_mb_40 {
    margin-bottom: 40px;
  }
  .res_xs_mb_50 {
    margin-bottom: 50px;
  }
  .res_xs_mt_20 {
    margin-top: 20px;
  }
  .res_xs_mt_30 {
    margin-top: 30px;
  }
  .res_xs_mt_40 {
    margin-top: 40px;
  }
  .res_xs_mt_50 {
    margin-top: 50px;
  }
  .banner_rouded_bg {
    border-radius: 0 0 50px;
  }
  .banner_section_s2 {
    padding-bottom: 30px;
  }
  .pr_box {
    margin-top: 25px;
  }
  .token_chart {
    margin-left: -10px;
    margin-right: -10px;
  }
  .contact_detail {
    padding-left: 65px;
  }
  .comment_list {
    margin-bottom: 30px;
  }
  .comment_content p {
    font-size: 14px;
    line-height: normal;
  }
  .user_img img {
    max-width: 60px;
    height: 60px;
  }
  .comment_form .form-group {
    margin-bottom: 15px;
  }
  .roadmap_wrap .owl-prev {
    left: 0;
  }
  .roadmap_wrap .owl-next {
    right: 0;
  }
  .video.play_btn {
    border: 2px solid #fff;
    height: 60px;
    padding: 18px 0 18px 3px;
    width: 60px;
  }
  .token_list_info .col-md-6:first-child .sale_info {
    margin-top: 0;
  }
  .token_list_info .col-md-6:nth-child(2) .sale_info {
    margin-top: 15px;
  }
  .dl_lan li {
    margin-top: 10px;
    width: 50%;
  }
  .tab-link {
    font-size: 13px;
    padding: 8px 7px;
  }
  .tab_content .nav-item {
    padding: 0 3px;
  }
  .tab_content ul {
    margin: 0 -3px;
  }
  .token_chart .chart_icon img {
    max-width: 30px;
  }
  .footer_social_s2 {
    margin-top: 20px;
  }
  .token_sale_box,
  .bonus_box,
  .bonus_box2 {
    margin-top: 15px;
  }
  .chart_desc_list li {
    width: 50%;
    padding: 0 5px;
  }
  .tab_nav_s3 li.nav-item a {
    padding: 5px 10px;
    font-size: 14px;
  }
  .presale_status {
    padding: 0 15px;
  }
  .tab_nav_s4 li.nav-item a {
    font-size: 14px;
    padding: 3px 15px;
  }
  .team_social_s2 {
    right: 0;
  }
  .timeline .owl-prev {
    left: 0;
  }
  .timeline .owl-next {
    right: 0;
  }
  .tab_content .tab_nav_s5 {
    background-color: transparent;
  }
  .tab_content .tab_nav_s5 li {
    padding: 0;
  }
  .review_box {
    margin-top: 30px;
    margin: 15px auto 0;
    display: table;
  }
}
@media only screen and (max-width: 480px) {
  .demo .txt {
    font-size: 14px;
  }
  .demo li a {
    font-size: 23px;
    height: 35px;
    line-height: 35px;
    width: 35px;
  }
  body,
  .btn {
    font-size: 14px;
  }
  .h1,
  h1 {
    font-size: 1.3rem;
  }
  .h3,
  h3 {
    font-size: 1rem;
  }
  .btn {
    height: 45px;
    line-height: 45px;
    padding: 0 18px;
  }
  .btn span {
    font-size: 20px;
    height: 38px;
    line-height: 42px;
    margin-left: -10px;
    margin-top: -2px;
    width: 38px;
  }
  .btn i {
    font-size: 26px;
  }
  .btn + .btn:last-child {
    margin-left: 5px;
  }
  section,
  .top_footer {
    padding: 30px 0;
  }
  .large_divider {
    height: 30px;
  }
  .small_divider {
    height: 20px;
  }
  section.small_pt {
    padding-top: 15px;
  }
  section.small_pb {
    padding-bottom: 15px;
  }
  .hide_m {
    display: none;
  }
  .title_default_light h4,
  .title_default_dark h4,
  .title_blue_dark h4,
  .title_dark h4,
  .title_purple_dark h4,
  .title_cyan_dark h4 {
    font-size: 22px;
    line-height: normal;
    margin-bottom: 20px;
  }
  .navbar-brand img {
    max-width: 200px;
  }
  .navbar-nav {
    border-right: 0;
    width: 100%;
  }
  .section_banner {
    padding: 100px 0 50px;
  }
  .section_banner {
    padding: 100px 0 30px;
  }
  .section_banner.banner_shape {
    padding-bottom: 50px;
  }
  .banner_cl_logo,
  .client_logo_border {
    margin-top: 15px;
  }
  .box_wrap h4,
  .box_desc h4 {
    font-size: 20px;
  }
  .tk_counter_inner {
    padding: 10px;
  }
  .counter_box .tk_counter {
    font-size: 24px;
    padding: 5px;
  }
  .counter_box .tk_counter::after {
    top: 5px;
  }
  .counter_box .tk_text {
    font-size: 10px;
  }
  .tk_countdown .btn {
    margin: 10px 0;
  }
  .tk_counter_inner .progress-bar {
    font-size: 12px;
    padding-right: 10px;
  }
  .mobileapp .btn {
    margin: 5px;
  }
  .faq_content .card-header a::after {
    font-size: 18px;
    right: 10px;
    top: 10px;
  }
  .faq_content .card-header a {
    padding: 10px 30px 10px 10px;
  }
  .newsletter_form button {
    padding: 8px 20px;
    right: 6px;
    top: 5px;
  }
  .team_info h4 a,
  .footer_title,
  .title_cyan_dark h4 {
    font-size: 20px;
  }
  .social_team a,
  .widget_title {
    font-size: 18px;
  }
  .blog_title,
  .widget-post-content h6 {
    font-size: 16px;
  }
  .blog_content_detail .blog_title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .authorize_box {
    padding: 20px 10px;
  }
  .authorize_box .form-group {
    margin-bottom: 15px;
  }
  .angle_top {
    border-top: 20px solid #fff;
  }
  .angle_bottom {
    border-bottom: 20px solid #fff;
  }
  .bg_light .angle_top {
    border-top: 20px solid #f7fafc;
  }
  .bg_light .angle_bottom {
    border-bottom: 20px solid #f7fafc;
  }
  .work_inner h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .roadmap_list {
    padding: 15px 15px 0;
  }
  .testimonial_wrap {
    padding: 10px;
  }
  .testimonial_wrap img {
    height: 70px;
    margin-bottom: 10px;
    max-width: 70px;
  }
  .testimonial_wrap h5 {
    margin: 15px 0 0;
  }
  .testimonial_wrap p {
    display: inline-block;
  }
  .action-content h3 {
    font-size: 20px;
  }
  .tags li a {
    font-size: 13px;
    padding: 4px 10px;
  }
  .pagination li a {
    font-size: 14px;
    padding: 5px 14px;
  }
  .section_breadcrumb {
    padding: 100px 0 30px;
  }
  .post-details article {
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  .widget {
    margin-bottom: 20px;
  }
  .sidebar_block {
    margin-top: 30px;
  }
  .token_info .tk_counter_inner,
  .token_list_info {
    padding: 20px;
  }
  .sale_info {
    margin-top: 15px;
  }
  .timeline_content {
    padding: 10px 12px;
  }
  .timeline_content h6 {
    font-size: 15px;
    line-height: normal;
  }
  .timeline_block {
    margin-bottom: 10px;
  }
  .tab_content ul {
    display: inline-block;
    width: 100%;
  }
  .tab_content .nav-item {
    float: left;
    margin-top: 10px;
    width: 50%;
  }
  .tab_content .tab-content {
    margin-top: 20px;
  }
  .token_rtinfo {
    margin-top: 30px;
  }
  .token_rt_value {
    padding: 10px;
  }
  .token_rt_value h3 span {
    font-size: 14px;
  }
  .video_text span {
    font-size: 20px;
    padding-top: 10px;
  }
  .video_text i {
    font-size: 36px;
    height: 65px;
    line-height: 70px;
    width: 65px;
  }
  .bg_navy_blue.video_bg {
    height: 50px;
  }
  .tab_nav_s2 li.nav-item {
    text-align: center;
  }
  .tab_nav_s2 li.nav-item:nth-child(2n) {
    border: 0;
  }
  .scrolldown a {
    line-height: 30px;
    font-size: 20px;
    height: 30px;
    width: 30px;
  }
  .scrolldown {
    bottom: 5px;
  }
  .banner_coundown.tk_countdown {
    padding: 0;
  }
  .highlight_txt {
    margin-bottom: 10px;
  }
  .newsletter_form .input_outline_white {
    padding-right: 97px;
    padding-left: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .newsletter_form button.radius_btn {
    padding: 3px 15px;
    font-size: 12px;
    top: 5px;
  }
  .vertical_social {
    margin-top: 20px;
  }
  .waveWrapper {
    height: 30px;
  }
  .waveMiddle,
  .waveTop {
    background-size: 50% 30px;
  }
  .doc_lan li {
    padding: 15px 7px 0;
    width: 33.33%;
  }
  .doc_lan li a {
    padding: 15px 10px 10px;
  }
  .presale_status {
    padding: 0;
  }
  .document_wrap {
    margin-bottom: 0;
  }
  .document_dropdown #doc_select_msdd {
    width: 200px !important;
  }
  .partner_logo {
    margin-bottom: -30px;
  }
  .tab_content .tab_nav_s6 {
    border: 0;
  }
  .token_circle::before {
    height: 430px;
    width: 430px;
  }
  .token_gradiant::after,
  .token_gradiant::before {
    height: 470px;
    width: 470px;
  }
  .contact_map2 {
    height: 200px;
  }
  .half-info li {
    float: none;
    width: 100%;
  }
  .contact_info_box {
    padding: 20px 0;
  }
  .list_info_half li {
    width: 100%;
  }
}
@media only screen and (max-width: 380px) {
  .title_default_light h4,
  .title_default_dark h4,
  .title_blue_dark h4,
  .title_dark h4,
  .title_purple_dark h4,
  .title_cyan_dark h4 {
    font-size: 20px;
  }
  .btn + .btn:last-child {
    margin-left: 0;
  }
  .btn_group .btn {
    margin: 5px 0;
  }
  .work_inner h4 {
    font-size: 18px;
  }
  .user_img img {
    max-width: 40px;
    height: 40px;
  }
  .comment_content {
    padding-left: 15px;
  }
  .comment_reply {
    padding: 15px 10px;
    margin-left: 15px;
  }
  .comment-reply i {
    font-size: 20px;
  }
  .box_counter i {
    font-size: 40px;
  }
  .box_counter .counter {
    font-size: 24px;
    margin-top: 10px;
  }
  .not_found h3 {
    font-size: 20px;
  }
  .action_block a,
  .action_block ul {
    display: table;
  }
  .social-share {
    margin-left: 0;
    margin-top: 10px;
  }
  .action-content h3 {
    font-size: 18px;
    line-height: normal;
  }
  .list_icon {
    height: 50px;
    line-height: 50px;
    width: 50px;
  }
  .list_content {
    padding-left: 10px;
  }
  .list_icon i {
    color: #fff;
    font-size: 20px;
  }
  .list_icon .fa-mobile {
    font-size: 26px;
    line-height: 42px;
  }
  .border_line li::before {
    left: 25px;
  }
  .chart_info_list {
    margin-left: 15px;
  }
  .chart_bx {
    margin-right: 3px;
  }
  .chart_info_list span {
    font-size: 12px;
  }
  .chart_img img {
    max-width: 120px;
  }
  .token_dt {
    padding: 15px;
  }
  .token_dt .icon_list li i {
    font-size: 16px;
  }
  .token_dt .icon_list li {
    padding: 0 4px;
  }
  .token_detail li h4 {
    font-size: 18px;
  }
  .tk_countdown {
    padding: 10px;
  }
  .token_info_table .table td:first-child,
  .token_info_table_s2 .table td:first-child {
    font-size: 14px;
  }
  .token_info_table_s2 .table td {
    padding: 8px;
  }
  .team_info h4 a,
  .footer_title,
  .bonus_box2 h5,
  .bonus_text_white a {
    font-size: 18px;
  }
  .video_text span {
    font-size: 18px;
  }
  .video_text i {
    font-size: 26px;
    height: 51px;
    line-height: 56px;
    width: 51px;
  }
  .video_wrap::before {
    border-width: 2px;
    bottom: 15px;
    left: -15px;
    right: -15px;
    top: -15px;
  }
  .doc_list li {
    margin-top: 15px;
    width: 100%;
  }
  .box_wrap h4,
  .box_desc h4 {
    font-size: 16px;
  }
  .discount_text {
    margin: 20px 0 10px;
  }
  .doc_lan li {
    padding: 15px 7px 0;
    width: 50%;
  }
  .footer_title_s2 {
    margin: 0 0 10px;
  }
  .document_dropdown {
    margin: 0;
  }
  .document_wrap label,
  .document_dropdown {
    display: block;
  }
  .document_dropdown #doc_select_msdd {
    width: 100% !important;
  }
}
body {
    background: #fff none repeat scroll 0 0;
    color: #7a7a7a;
    font-family: poppins, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px
}

html,
body {
    height: 100%
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: #5957cd
}

p {
    color: #7a7a7a;
    margin-bottom: 30px
}

a {
    color: #5957cd;
    text-decoration: none;
    -webkit-transition: all .5s ease;
    transition: all .5s ease
}

a:hover {
    color: #ff69c9;
    text-decoration: none;
    transition: all .5s ease
}

a:focus {
    outline: none;
    text-decoration: none
}

img {
    max-width: 100%
}

ul,
li {
    margin: 0;
    padding: 0
}

::-webkit-input-placeholder {
    color: #7a7a7a;
    font-weight: 400;
    font-family: poppins, sans-serif
}

:-moz-placeholder {
    color: #7a7a7a;
    font-weight: 400;
    font-family: poppins, sans-serif
}

::-moz-placeholder {
    color: #7a7a7a;
    font-weight: 400;
    font-family: poppins, sans-serif
}

:-ms-input-placeholder {
    color: #7a7a7a;
    font-weight: 400;
    font-family: poppins, sans-serif
}

.form-control:focus {
    box-shadow: none
}

fieldset {
    border: 0;
    margin: 0 auto;
    padding: 0
}

section {
    padding: 100px 0;
    position: relative
}

.no-padding {
    padding: 0
}

section.small_pt {
    padding-top: 50px
}

section.small_pb {
    padding-bottom: 50px
}

.lg_pt_20 {
    padding-top: 20px
}

.lg_pt_30 {
    padding-top: 30px
}

.lg_pt_40 {
    padding-top: 40px
}

.lg_pt_50 {
    padding-top: 50px
}

.lg_pb_20 {
    padding-bottom: 20px
}

.lg_pb_30 {
    padding-bottom: 30px
}

.lg_pb_40 {
    padding-bottom: 40px
}

.lg_pb_50 {
    padding-bottom: 50px
}

.list_none li {
    list-style: none
}

input {
    border: 0;
    padding: 10px 20px;
    width: 100%
}

button {
    background-image: -webkit-linear-gradient(left, #ff67cb 0%, #ffcc67 99%);
    background-image: linear-gradient(to right, #ff67cb 0%, #ffcc67 99%);
    border: 0;
    border-radius: 40px;
    color: #fff;
    cursor: pointer;
    padding: 10px 20px;
    text-transform: uppercase;
    transition: all .5s ease 0s
}

button:hover {
    color: #fff
}

button:focus {
    outline: none
}

.overflow_hide {
    overflow: hidden
}

.title_default_light h4,
.title_default_dark h4 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px;
    text-transform: capitalize
}

.title_default_light h4,
.title_default_light p {
    color: #fff
}

.title_blue_dark h4 {
    color: #0043bb;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px
}

.title_dark h4 {
    color: #0c0e27;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px
}

.title_purple_dark h4 {
    color: #6000b5;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px
}

.title_cyan_dark h4 {
    color: #0e082c;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px
}

.title_border h4 {
    padding-bottom: 15px;
    position: relative
}

.title_blue_dark.title_border h4::before {
    background-color: #0043bb
}

.title_cyan_dark.title_border h4::before {
    background-color: #280e3b
}

.title_purple_dark.title_border h4::before {
    background-color: #0e082c
}

.title_dark.title_border h4::before {
    background-color: #0c0e27
}

.title_border h4::before {
    background-color: #5957cd;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    right: 0;
    width: 80px
}

.title_border.text-center h4::before {
    margin: 0 auto
}

.title_default_light.title_border h4::before {
    background-color: #fff
}

.divider {
    clear: both;
    display: block;
    height: 20px
}

.background_bg {
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}

.transparent_bg {
    background-color: transparent !important
}

.box_shadow_none {
    box-shadow: none !important
}

.bg_light {
    background-color: #f7fafc
}

.bg_blue_dark {
    background-color: #0b267d
}

.bg_light_dark {
    background-color: #121833
}

.bg_light_dark_blue {
    background-color: #161d3e
}

.bg_black_dark,
.v_dark {
    background-color: #0c0e27
}

.blue_light_bg,
.v_blue_pro {
    background-color: #5957cd
}

.light_blue_dark_bg {
    background-color: #4a49bf
}

.blue_lightdark_bg {
    background-color: #4241b8
}

.bg_gray {
    background-color: #f1f1f1
}

.bg_gray2 {
    background-color: #f8f8ff
}

.bg_gray3 {
    background-color: #fbfaff
}

.bg_gray4 {
    background-color: #f7f7f7
}

.pink_bg {
    background-color: #ff68ca
}

.yellow_bg {
    background-color: #ffca69
}

.blue_bg,
.v_royal_blue {
    background-color: #193dc0
}

.blue_dark_bg {
    background-color: #081990
}

.purple_bg {
    background-color: #6000b5
}

.purple_dark_bg {
    background-color: #3e1084
}

.large_divider {
    height: 100px
}

.small_divider {
    height: 50px
}

.small_space {
    margin-top: 20px
}

.large_space {
    margin-top: 50px
}

.small_text * {
    font-size: 14px
}

.container,
.container-fluid {
    position: relative;
    z-index: 5
}

.gradient_box {
    background: -webkit-linear-gradient(left, #ff67cb 0%, #ffcc67 99%) !important;
    background: linear-gradient(to right, #ff67cb 0%, #ffcc67 99%) !important
}

.gradient_box2 {
    background: -moz-linear-gradient(180deg, rgba(25, 61, 192, 1) 0%, rgba(10, 29, 149, 1) 50%, rgba(25, 61, 192, 1) 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(25, 61, 192, 1)), color-stop(50%, rgba(10, 29, 149, 1)), color-stop(100%, rgba(25, 61, 192, 1)));
    background: -webkit-linear-gradient(180deg, rgba(25, 61, 192, 1) 0%, rgba(10, 29, 149, 1) 50%, rgba(25, 61, 192, 1) 100%);
    background: -o-linear-gradient(180deg, rgba(25, 61, 192, 1) 0%, rgba(10, 29, 149, 1) 50%, rgba(25, 61, 192, 1) 100%);
    background: -ms-linear-gradient(180deg, rgba(25, 61, 192, 1) 0%, rgba(10, 29, 149, 1) 50%, rgba(25, 61, 192, 1) 100%);
    background: linear-gradient(270deg, rgba(25, 61, 192, 1) 0%, rgba(10, 29, 149, 1) 50%, rgba(25, 61, 192, 1) 100%)
}

.section_gradiant {
    background: -webkit-linear-gradient(to bottom, rgba(32, 18, 111, 1) 0%, rgba(5, 45, 133, 1) 100%);
    background-image: linear-gradient(to bottom, rgba(32, 18, 111, 1) 0%, rgba(5, 45, 133, 1) 100%)
}

.section_gradiant2 {
    background-image: -webkit-linear-gradient(left, #6000b5 0%, #3e2a9c 99%);
    background-image: linear-gradient(to right, #6000b5 0%, #3e2a9c 99%)
}

.section_gradiant3 {
    background-image: -webkit-linear-gradient(left, #193f88 0%, #0e082c 99%);
    background-image: linear-gradient(to right, #193f88 0%, #0e082c 99%)
}

.v_blue,
.bg_navy_blue {
    background-color: #052d85
}

.bg_navy_blue_dark {
    background-color: #121a6d
}

.v_blue .title_default_dark.title_border h4::before {
    background-color: #0a257c
}

.v_blue .title_default_dark h4 {
    color: #0a257c
}

#loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999
}

#loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 200px;
    width: 200px;
    margin-top: -100px;
    margin-left: -100px;
    -ms-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    z-index: 1001
}

.object {
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    position: absolute;
    border-top: 5px solid #fff;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #fff;
    border-right: 5px solid transparent;
    -webkit-animation: animate 2s infinite;
    animation: animate 2s infinite
}

#object_one {
    left: 75px;
    top: 75px;
    width: 50px;
    height: 50px
}

#object_two {
    left: 65px;
    top: 65px;
    width: 70px;
    height: 70px;
    -webkit-animation-delay: .2s;
    animation-delay: .2s
}

#object_three {
    left: 55px;
    top: 55px;
    width: 90px;
    height: 90px;
    -webkit-animation-delay: .4s;
    animation-delay: .4s
}

#object_four {
    left: 45px;
    top: 45px;
    width: 110px;
    height: 110px;
    -webkit-animation-delay: .6s;
    animation-delay: .6s
}

@-webkit-keyframes animate {
    50% {
        -ms-transform: rotate(360deg) scale(.8);
        -moz-transform: rotate(360deg) scale(.8);
        -webkit-transform: rotate(360deg) scale(.8);
        transform: rotate(360deg) scale(.8)
    }
}

@keyframes animate {
    50% {
        -ms-transform: rotate(360deg) scale(.8);
        -moz-transform: rotate(360deg) scale(.8);
        -webkit-transform: rotate(360deg) scale(.8);
        transform: rotate(360deg) scale(.8)
    }
}

#loader-wrapper .loader-section {
    position: fixed;
    top: 0;
    width: 51%;
    height: 100%;
    background-color: #4241b8;
    z-index: 999;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0)
}

#loader-wrapper .loader-section.section-left {
    left: 0
}

#loader-wrapper .loader-section.section-right {
    right: 0
}

.loaded #loading-center-absolute {
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out
}

.loaded #loader-wrapper .loader-section.section-left {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: all .8s .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .8s .3s cubic-bezier(.645, .045, .355, 1)
}

.loaded #loader-wrapper .loader-section.section-right {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -moz-transform: translateX(100%);
    transform: translateX(100%);
    -webkit-transition: all .8s .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .8s .3s cubic-bezier(.645, .045, .355, 1)
}

.loaded #loader-wrapper {
    visibility: hidden;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition: all .5s 1s ease-out;
    transition: all .3s 1s ease-out
}

.v_blue #loader-wrapper .loader-section,
.v_navy_blue #loader-wrapper .loader-section {
    background-color: #121a6d
}

.v_dark #loader-wrapper .loader-section,
.v_light_dark #loader-wrapper .loader-section {
    background-color: #030307
}

.v_blue_light #loader-wrapper .loader-section,
.v_royal_blue #loader-wrapper .loader-section {
    background-color: #081990
}

.v_light_purple #loader-wrapper .loader-section {
    background-color: #4e0094
}

.v_cyan_blue #loader-wrapper .loader-section,
.v_cyan_blue .spop {
    background-color: #0e082c
}

.color-switch {
    background: #212121;
    right: -200px;
    padding: 20px 0;
    position: absolute;
    top: 0;
    transition: all .4s ease 0s;
    width: 200px;
    z-index: 9999999
}

.color-switch p {
    color: #fff;
    margin: 0;
    padding: 10px 15px 5px
}

.color_box {
    padding: 0 15px
}

.switch-active {
    right: 0
}

.demo ul {
    position: fixed;
    right: 0;
    top: 35%;
    z-index: 9999
}

.demo ul li {
    position: relative
}

.demo li a {
    background: #212121;
    color: #fff;
    display: block;
    font-size: 24px;
    height: 40px;
    line-height: 44px;
    text-align: center;
    width: 40px;
    transition: all .4s ease 0s
}

.demo li a.bg-green {
    background-color: #73e080
}

.demo li a.dm {
    background-color: #f94551
}

.demo .txt {
    background-color: #018df1;
    font-size: 16px
}

.demo li a i {
    line-height: normal;
    -webkit-animation: fa-spin 2s infinite linear;
    animation: fa-spin 2s infinite linear
}

.icon {
    right: 0;
    position: absolute;
    top: 0
}

.icon.switch-active {
    right: 200px
}

.menu_link {
    left: 0;
    position: fixed;
    top: 30%;
    z-index: 99
}

.menu_link a {
    color: #fff;
    padding: 10px
}

.color-switch button::after {
    color: #fff;
    content: "\\f122";
    font-family: ionicons;
    font-size: 14px;
    opacity: 0
}

.color-switch button {
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    height: 24px;
    line-height: 24px;
    margin: 7px 0 0 0;
    padding: 0;
    position: relative;
    text-align: center;
    width: 24px
}

.color-switch .active::after {
    opacity: 1
}

.default {
    background-image: -webkit-linear-gradient(left, #ff67cb 0%, #ffcc67 99%);
    background-image: linear-gradient(to right, #ff67cb 0%, #ffcc67 99%)
}

.green {
    background-image: -webkit-linear-gradient(left, #40f8a6 0%, #43B1FB 99%);
    background-image: linear-gradient(to right, #40f8a6 0%, #43B1FB 99%)
}

.orange {
    background-image: -webkit-linear-gradient(left, #f46b45 0%, #eea849 99%);
    background-image: linear-gradient(to right, #f46b45 0%, #eea849 99%)
}

.lightgreen {
    background-image: -webkit-linear-gradient(left, #de934b 0%, #56d6a7 99%);
    background-image: linear-gradient(to right, #de934b 0%, #56d6a7 99%)
}

.redpink {
    background-image: -webkit-linear-gradient(left, #FC3465 0%, #C300D8 99%);
    background-image: linear-gradient(to right, #FC3465 0%, #C300D8 99%)
}

.lightpurple {
    background-image: -webkit-linear-gradient(left, #25cc9c 0%, #9e50e4 99%);
    background-image: linear-gradient(to right, #25cc9c 0%, #9e50e4 99%)
}

.btn {
    border: 0;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    height: 54px;
    line-height: 54px;
    padding: 0 25px;
    position: relative;
    text-transform: uppercase;
    vertical-align: middle
}

.btn.btn-radius {
    border-radius: 40px
}

.btn span {
    background: #5957cd none repeat scroll 0 0;
    border-radius: 100%;
    color: #fff;
    display: inline-block;
    font-size: 20px;
    height: 35px;
    line-height: 38px;
    margin-left: -20px;
    margin-right: 13px;
    padding-left: 2px;
    position: relative;
    text-align: center;
    transition: all .5s ease 0s;
    vertical-align: middle;
    width: 35px
}

.btn span::after {
    -webkit-animation: rounded 2.5s infinite;
    -moz-animation: rounded 2.5s infinite;
    -o-animation: rounded 2.5s infinite;
    -ms-transition: rounded 2.5s infinite;
    animation: rounded 2.5s infinite;
    border: 1px solid #5957cd;
    border-radius: 100%;
    bottom: -5px;
    content: "";
    display: block;
    left: -5px;
    opacity: 0;
    position: absolute;
    right: -5px;
    top: -5px;
    z-index: -1
}

.btn span::after {
    animation-delay: .8s
}

.btn.btn-lg {
    padding: 0 40px
}

@keyframes rounded {
    0% {
        opacity: 0;
        -webkit-transform: scale(.5);
        -moz-transform: scale(.5);
        transform: scale(.5)
    }

    50% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        transform: scale(1.2)
    }
}

.btn em {
    display: inline-block;
    font-size: 24px;
    line-height: 24px;
    margin-right: 10px;
    vertical-align: middle
}

.btn.active.focus,
.btn.active:focus,
.btn.active:hover,
.btn:active:focus,
.btn:active:hover,
.btn.active,
.btn:active,
.btn.focus:active,
.btn:focus,
.btn.active:not(:disabled):not(.disabled),
.btn:active:not(:disabled):not(.disabled) {
    background-image: -webkit-linear-gradient(left, #ff67cb 0%, #ffcc67 51%, #ff67cb);
    background-image: linear-gradient(to right, #ff67cb 0%, #ffcc67 51%, #ff67cb);
    box-shadow: none;
    outline: none
}

.btn-default {
    background-size: 200% auto;
    background-image: -webkit-linear-gradient(left, #ff67cb 0%, #ffcc67 51%, #ff67cb);
    background-image: linear-gradient(to right, #ff67cb 0%, #ffcc67 51%, #ff67cb);
    border: 0;
    color: #fff;
    outline: none;
    text-transform: uppercase;
    z-index: 2;
    transition: all .5s ease 0s
}

.btn-default:hover {
    background-position: right center
}

.btn-default:hover,
.btn-border:hover {
    color: #fff
}

.btn-default.active.focus,
.btn-default.active:focus,
.btn-default.active:hover,
.btn-default:active:focus,
.btn-default:active:hover,
.btn-default.active,
.btn-default:active,
.btn-default.focus:active,
.btn-default:focus,
.btn.active:not(:disabled):not(.disabled),
.btn:active:not(:disabled):not(.disabled) {
    background-image: -webkit-linear-gradient(left, #ffcc67 0%, #ff67cb 51%, #ffcc67);
    background-image: linear-gradient(to right, #ffcc67 0%, #ff67cb 51%, #ffcc67);
    box-shadow: none;
    color: #fff;
    outline: none
}

.btn-border {
    background-image: -webkit-linear-gradient(left, #ffcc67 0%, #ff67cb 99%);
    background-image: linear-gradient(to right, #ffcc67 0%, #ff67cb 99%);
    border: 0;
    color: #fff;
    outline: none;
    text-transform: uppercase;
    z-index: 2
}

.btn-border::after {
    background-color: #5957cd;
    border-radius: 5px;
    bottom: 0;
    content: "";
    left: 0;
    margin: 2px;
    position: absolute;
    right: 0;
    top: 0;
    transition: all .5s ease 0s;
    z-index: -1
}

.btn-border.btn-white-bg::after {
    background-color: #fff
}

.btn-border.btn-white-bg {
    color: #5957cd
}

.btn-border.btn-white-bg:hover,
.btn-border.btn-white-bg:focus {
    color: #fff
}

.btn-border.btn-radius::after {
    border-radius: 40px
}

.btn-border:hover:after,
.btn-border:focus:after {
    opacity: 0
}

.btn.btn-border:hover,
.btn.btn-border.active.focus,
.btn.btn-border.active:focus,
.btn.btn-border.active:hover,
.btn.btn-border:active:focus,
.btn.btn-border:active:hover,
.btn.btn-border.active,
.btn.btn-border:active,
.btn.btn-border.focus:active,
.btn.btn-border:focus {
    background-image: -webkit-linear-gradient(left, #ffcc67 0%, #ff67cb 99%);
    background-image: linear-gradient(to right, #ffcc67 0%, #ff67cb 99%)
}

.btn i {
    font-size: 30px;
    line-height: 24px;
    margin-left: 5px;
    padding-top: 4px;
    vertical-align: middle
}

.btn i.fa {
    font-size: 16px;
    margin-left: 0;
    margin-right: 10px;
    margin-top: -2px;
    padding: 0
}

.btn-primary {
    background: transparent;
    color: #5957cd;
    -moz-transition: all .5s ease 0s;
    -webkit-transition: all .5s ease 0s;
    transition: all .5s ease 0s
}

.btn-primary:hover,
.btn-primary.active.focus,
.btn-primary.active:focus,
.btn-primary.active:hover,
.btn-primary:active:focus,
.btn-primary:active:hover,
.btn-primary.active,
.btn-primary:active,
.btn-primary.focus:active,
.btn-primary:focus,
.btn-primary.active:focus:not(:disabled):not(.disabled),
.btn-primary:active:focus:not(:disabled):not(.disabled),
.btn-primary.active:not(:disabled):not(.disabled),
.btn-primary:active:not(:disabled):not(.disabled) {
    background: transparent !important;
    box-shadow: none;
    color: #5957cd;
    padding-left: 30px
}

.btn-info {
    background: #5957cd none repeat scroll 0 0;
    height: auto;
    line-height: normal;
    padding: 12px 30px
}

.btn-info:hover,
.btn-info.active,
.btn-info:focus,
.btn-info.active:not(:disabled):not(.disabled),
.btn-info:active:not(:disabled):not(.disabled),
.btn-info.active:focus:not(:disabled):not(.disabled),
.btn-info:active:focus:not(:disabled):not(.disabled) {
    background: #4241b8;
    box-shadow: none
}

.box_shadow,
.box_shadow:hover,
.box_shadow.active,
.box_shadow:focus,
.box_shadow.active:focus:not(:disabled):not(.disabled),
.box_shadow:active:focus:not(:disabled):not(.disabled),
.box_shadow.active:not(:disabled):not(.disabled),
.box_shadow:active:not(:disabled):not(.disabled) {
    box-shadow: 0 5px 20px rgba(0, 0, 0, .25)
}

.btn-border-white {
    border: 2px solid #fff;
    color: #fff
}

.btn-border-white:hover,
.btn-border-white.active.focus,
.btn-border-white.active:focus,
.btn-border-white.active:hover,
.btn-border-white:active:focus,
.btn-border-white:active:hover,
.btn-border-white.active,
.btn-border-white:active,
.btn-border-white.focus:active,
.btn-border-white:focus,
.btn.btn-border-white.active:not(:disabled):not(.disabled),
.btn.btn-border-white:active:not(:disabled):not(.disabled) {
    background-color: #fff;
    background-image: none;
    color: #000
}

.btn-white,
button.btn-white {
    background: rgba(255, 255, 255, .2);
    color: #fff
}

.btn-white:hover,
.btn-white.active.focus,
.btn-white.active:focus,
.btn-white.active:hover,
.btn-white:active:focus,
.btn-white:active:hover,
.btn-white.active,
.btn-white:active,
.btn-white.focus:active,
.btn-white:focus,
.btn.btn-white.active:not(:disabled):not(.disabled),
.btn.btn-white:active:not(:disabled):not(.disabled) {
    background: rgba(255, 255, 255, .2)
}

.scrollup {
    border-radius: 4px;
    bottom: 30px;
    color: #fff;
    display: none;
    font-size: 30px;
    height: 40px;
    line-height: 40px;
    position: fixed;
    right: 20px;
    text-align: center;
    width: 40px;
    z-index: 99
}

.btn+.btn:last-child {
    margin-left: 10px
}

.angle_top {
    border-right: 100vw solid transparent;
    border-top: 100px solid #fff;
    display: block;
    height: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    z-index: 1
}

.angle_bottom {
    border-bottom: 100px solid #fff;
    border-left: 100vw solid transparent;
    bottom: 0;
    display: block;
    height: 0;
    position: absolute;
    right: 0;
    width: 0;
    z-index: 9
}

.bounceimg {
    -webkit-animation: bounceimg 1s ease-in-out 0s infinite alternate;
    animation: bounceimg 1s ease-in-out 0s infinite alternate
}

@-webkit-keyframes bounceimg {
    from {
        -webkit-transform: translateY(0px);
        transform: translateY(0px)
    }

    to {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px)
    }
}

@keyframes bounceimg {
    from {
        -webkit-transform: translateY(0px);
        transform: translateY(0px)
    }

    to {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px)
    }
}

.v_blue .btn-info,
.v_navy_blue .btn-info {
    background-color: #0d469f
}

.v_blue .btn-info:hover,
.v_blue .btn-info.active,
.v_blue .btn-info:focus,
.v_blue .btn-info.active:not(:disabled):not(.disabled),
.v_blue .btn-info:active:not(:disabled):not(.disabled),
.v_blue .btn-info.active:focus:not(:disabled):not(.disabled),
.v_blue .btn-info:active:focus:not(:disabled):not(.disabled),
.v_navy_blue .btn-info:hover,
.v_navy_blue .btn-info.active,
.v_navy_blue .btn-info:focus,
.v_navy_blue .btn-info.active:not(:disabled):not(.disabled),
.v_navy_blue .btn-info:active:not(:disabled):not(.disabled),
.v_navy_blue .btn-info.active:focus:not(:disabled):not(.disabled),
.v_navy_blue .btn-info:active:focus:not(:disabled):not(.disabled) {
    background-color: #0b267d
}

.v_dark .btn-border::after {
    background-color: #0c0e27
}

.v_dark .btn-info,
.v_light_dark .btn-info {
    background-color: #0c0e27
}

.v_dark .btn-info:hover,
.v_dark .btn-info.active,
.v_dark .btn-info:focus,
.v_dark .btn-info.active:not(:disabled):not(.disabled),
.v_dark .btn-info:active:not(:disabled):not(.disabled),
.v_dark .btn-info.active:focus:not(:disabled):not(.disabled),
.v_dark .btn-info:active:focus:not(:disabled):not(.disabled),
.v_light_dark .btn-info:hover,
.v_light_dark .btn-info.active,
.v_light_dark .btn-info:focus,
.v_light_dark .btn-info.active:not(:disabled):not(.disabled),
.v_light_dark .btn-info:active:not(:disabled):not(.disabled),
.v_light_dark .btn-info.active:focus:not(:disabled):not(.disabled),
.v_light_dark .btn-info:active:focus:not(:disabled):not(.disabled) {
    background-color: #161d3e
}

.v_navy_blue .btn-border::after {
    background-color: #052d85
}

.bg_light .angle_top {
    border-top-color: #f7fafc
}

.bg_light .angle_bottom {
    border-bottom-color: #f7fafc
}

.v_light_purple .btn-border.btn-white-bg {
    color: #280e3b
}

.v_light_purple .btn-border.btn-white-bg:hover,
.v_light_purple .btn-border.btn-white-bg:focus {
    color: #fff
}

.v_light_purple .btn-white:hover,
.v_light_purple .btn-white.active.focus,
.v_light_purple .btn-white.active:focus,
.v_light_purple .btn-white.active:hover,
.v_light_purple .btn-white:active:focus,
.v_light_purple .btn-white:active:hover,
.v_light_purple .btn-white.active,
.v_light_purple .btn-white:active,
.v_light_purple .btn-white.focus:active,
.v_light_purple .btn-white:focus,
.v_light_purple .btn.btn-white.active:not(:disabled):not(.disabled),
.v_light_purple .btn.btn-white:active:not(:disabled):not(.disabled) {
    background: rgba(255, 255, 255, .2);
    color: #00fdfa
}

header {
    height: 110px;
    padding: 25px 50px;
    transition: all .4s ease 0s
}

.hb_box_shadow {
    box-shadow: 0 0 1px rgba(255, 255, 255, .3)
}

.navbar {
    padding: 0
}

.navbar-brand {
    margin: 0;
    padding: 0
}

.modal-open header.fixed-top {
    padding: 5px 0 !important
}

.nav-fixed,
header.active,
.spop {
    background-color: #4241b8;
    box-shadow: 0 0 4px rgba(0, 0, 0, .1)
}

header.nav-fixed {
    height: 70px;
    padding: 5px 0
}

.nav-fixed .navbar-brand img {
    max-width: 180px
}

header.no-sticky {
    left: 0;
    position: absolute;
    right: 0
}

header .navbar-nav a {
    color: #fff
}

.navbar-expand-lg .navbar-nav>li {
    padding: 0 12px
}

.navbar-expand-lg .navbar-nav>li:last-child {
    padding-right: 0
}

header a:hover,
.navbar-nav li a.active,
.navbar-nav .dropdown-menu li.active a {
    color: #ff69c9
}

.navbar-expand-lg .navbar-nav .nav-link {
    padding: 15px 0;
    font-weight: 500;
    position: relative;
    text-transform: uppercase
}

.navbar-expand-lg .navbar-nav .nav-link.nav_icon {
    background-color: rgba(255, 255, 255, .2);
    height: 32px;
    width: 32px;
    border-radius: 100%;
    line-height: 32px;
    padding: 0;
    text-align: center;
    margin: 15px 0
}

.navbar-expand-lg .navbar-nav>li>.nav-link.active:before {
    background-color: #ff69c9;
    bottom: 10px;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%
}

.navbar-expand-lg .nav_btn>li {
    margin-left: 15px;
    padding: 0
}

.navbar-expand-lg .nav_btn>li:first-child {
    margin: 0
}

.navbar-expand-lg .navbar-nav.nav_btn a {
    border: 0;
    height: auto;
    line-height: normal
}

.navbar-expand-lg .navbar-nav.nav_btn a.btn {
    padding: 10px 25px
}

.dropdown-toggle::after,
.dropdown-toggler::after {
    border: 0;
    content: "";
    font-family: ionicons;
    height: auto;
    line-height: normal;
    margin-left: 5px;
    vertical-align: middle;
    width: auto
}

.navbar-nav .dropdown-menu {
    background-color: #4241b8;
    border: 0;
    border-radius: 0;
    margin: 0;
    padding: 0
}

.dropdown-item:focus,
.dropdown-item:hover {
    background-color: transparent;
    color: #ff69c9;
    padding: 10px
}

.navbar-expand-lg .navbar-nav li {
    position: relative
}

.navbar-expand-lg .navbar-nav .dropdown-item {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 3px 10px;
    text-transform: capitalize
}

.navbar-expand-lg .navbar-nav .dropdown-item:hover {
    color: #ff69c9
}

.navbar-expand-lg .navbar-nav .dropdown-item.active,
.navbar-expand-lg .navbar-nav .dropdown.show>a {
    background-color: transparent;
    color: #ff69c9
}

.lng_dropdown .dd.ddcommon {
    cursor: pointer;
    padding-right: 10px;
    position: relative;
    width: 70px !important
}

.arrow::before {
    color: #fff;
    content: "";
    font-family: ionicons;
    position: absolute;
    right: 0;
    top: 0
}

.lng_dropdown .divider {
    display: none
}

.lng_dropdown .ddTitleText img,
.lng_dropdown .ddChild li img {
    border-radius: 100%;
    display: inline-block;
    height: 20px;
    width: 20px
}

.lng_dropdown .ddTitleText {
    cursor: pointer
}

.lng_dropdown .ddlabel {
    color: #fff;
    display: inline-block;
    margin-left: 8px;
    vertical-align: middle
}

.lng_dropdown .border {
    border: 0 !important
}

.lng_dropdown .ddChild {
    background-color: #4241b8;
    left: -9px;
    margin-top: 0;
    padding: 5px 9px;
    top: 100% !important
}

.lng_dropdown .ddChild li {
    cursor: pointer;
    line-height: normal;
    list-style: outside none none;
    padding: 2px 0
}

.logo_dark {
    display: none
}

.v_blue .nav-fixed,
.v_blue header.active,
.v_blue .navbar-nav .dropdown-menu,
.v_blue .lng_dropdown .ddChild,
.v_blue .spop,
.v_navy_blue .nav-fixed,
.v_navy_blue header.active,
.v_navy_blue .navbar-nav .dropdown-menu,
.v_navy_blue .lng_dropdown .ddChild,
.v_navy_blue .spop {
    background-color: #121a6d
}

.v_dark .nav-fixed,
.v_dark header.active,
.v_dark .navbar-nav .dropdown-menu,
.v_dark .lng_dropdown .ddChild,
.v_dark .spop,
.v_light_dark .nav-fixed,
.v_light_dark header.active,
.v_light_dark .navbar-nav .dropdown-menu,
.v_light_dark .lng_dropdown .ddChild,
.v_light_dark .spop {
    background-color: #262d4e
}

.v_blue_light .nav-fixed,
.v_blue_light header.active,
.v_blue_light .navbar-nav .dropdown-menu,
.v_blue_light .lng_dropdown .ddChild,
.v_blue_light .spop,
.v_royal_blue .nav-fixed,
.v_royal_blue header.active,
.v_royal_blue .navbar-nav .dropdown-menu,
.v_royal_blue .lng_dropdown .ddChild,
.v_royal_blue .spop {
    background-color: #081990
}

.v_light_purple .nav-fixed,
.v_light_purple header.active,
.v_light_purple .navbar-nav .dropdown-menu,
.v_light_purple .lng_dropdown .ddChild,
.v_light_purple .spop {
    background-color: #3e1084
}

.v_cyan_blue .nav-fixed,
.v_cyan_blue header.active,
.v_cyan_blue .navbar-nav .dropdown-menu,
.v_cyan_blue .lng_dropdown .ddChild {
    background-color: #193d85
}

.v_light_purple header {
    padding: 10px 0;
    height: auto
}

.banner_effect {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0
}

.transparent_effect {
    height: 100%;
    opacity: .4;
    position: absolute;
    top: 0
}

.transparent_effect.fixed {
    position: fixed;
    z-index: 1
}

.banner_rouded_bg {
    border-radius: 0 0 400px;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    -moz-transform: skewY(3deg);
    -webkit-transform: skewY(3deg);
    transform: skewY(3deg);
    transform-origin: right top 0;
    width: 100%;
    z-index: -1
}

.section_banner {
    background-position: left bottom;
    background-size: cover;
    padding: 200px 0 100px;
    position: relative;
    overflow: hidden
}

.banner_full_height {
    min-height: 100vh;
    height: 100%
}

.section_banner.banner_shape {
    padding-bottom: 200px
}

.banner_bg1 {
    background-image: url(../images/banner_bg1.png)
}

.banner_text h1 {
    color: #fff;
    font-weight: 700;
    margin-bottom: 25px
}

.banner_text_s2 h1 {
    font-weight: 400;
    margin-bottom: 25px
}

.banner_text h3 {
    color: #fff;
    font-weight: 700;
    margin-bottom: 20px
}

.banner_text p {
    color: #fff
}

.banner_image_right {
    min-width: 690px
}

.banner_image_left {
    left: -25%;
    min-width: 690px;
    position: relative
}

.btn_group .btn {
    display: inline-block
}

.social_icon {
    display: inline-block;
    vertical-align: middle
}

.social_icon li {
    float: left;
    margin-right: 10px
}

.social_icon li a i {
    background-color: #fff;
    border-radius: 100%;
    display: block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 30px
}

.social_bg_tran li a i {
    background-color: rgba(255, 255, 255, .1)
}

.banner_inner .alert {
    border: 0;
    border-radius: 5px 5px 0 0;
    display: table;
    font-weight: 400;
    margin: 0 auto;
    padding: 8px 25px 5px
}

.alert-warning {
    background-color: #ffc66c;
    color: #000
}

.section_banner .tk_counter_inner {
    border: 0
}

.tk_counter_inner .progress,
.tk_counter_inner .progress-bar {
    border-radius: 20px;
    color: #5957cd;
    font-size: 14px;
    text-align: right
}

.tk_counter_inner .progress-bar {
    padding-right: 12px
}

.tk_counter_inner .progress {
    background-color: transparent;
    border: 1px solid #fff;
    height: 23px;
    margin-bottom: 40px;
    margin-top: 50px;
    overflow: visible;
    position: relative
}

.tk_counter_inner .progress-bar {
    background: #fff;
    font-weight: 600
}

.token_box .progress-bar-success {
    background-color: #05b5ff
}

.progress .progress_label {
    background-color: #000;
    bottom: -6px;
    color: #fff;
    line-height: 1;
    position: absolute;
    top: -6px;
    width: 1px
}

.progress .progress_label strong {
    font-size: 14px;
    font-weight: 600;
    left: 50%;
    margin-top: 5px;
    position: absolute;
    top: 100%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    transform: translateX(-50%);
    white-space: nowrap
}

.progress_max_val {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    padding: 0 5px;
    position: absolute;
    right: 0;
    top: -30px
}

.progress_min_val {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    padding: 0 5px;
    position: absolute;
    left: 0;
    top: -30px
}

.icon_list li {
    line-height: normal;
    padding: 0 5px
}

.icon_list li i {
    color: #fff;
    font-size: 20px
}

.bg-white .tk_countdown_time {
    background-color: #fff;
    border: 1px solid #5857ee;
    border-radius: 5px;
    box-shadow: none
}

.bg-white .progress-bar {
    background: #5957cd
}

.bg-white .progress {
    border-color: #5957cd
}

.bg-white .tk_counter,
.bg-white .progress_min_val,
.bg-white .progress_max_val,
.bg-white .progress .progress_label {
    color: #5957cd
}

.bg-white .progress,
.bg-white .progress-bar {
    color: #fff
}

.bg-white .tk_text {
    color: #7a7a7a
}

.bg-white .icon_list li i {
    color: #7a79d7
}

.banner_cl_logo {
    margin-top: 20px
}

.tk_counter_inner .progress-bar.gradient {
    background: -webkit-linear-gradient(left, #ff67cb 0%, #ffcc67 99%);
    background: linear-gradient(to right, #ff67cb 0%, #ffcc67 99%)
}

.banner_rounded_bg {
    height: 561px;
    left: 50%;
    min-width: 561px;
    position: absolute;
    top: -20%;
    width: 561px;
    z-index: -1;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.banner_rounded_bg img {
    -webkit-animation: swing 100s infinite linear;
    -moz-animation: swing 100s infinite linear;
    -o-animation: swing 100s infinite linear;
    animation: swing 100s infinite linear
}

.banner_img {
    text-align: right
}

.banner_rounded_shape::before {
    background-color: rgba(8, 22, 139, .3);
    border-radius: 100%;
    content: "";
    height: 968px;
    left: -160px;
    opacity: 1;
    position: absolute;
    right: 0;
    top: -165px;
    transform: skew(-1deg);
    width: 1240px;
    z-index: 0
}

.banner_rounded_shape::after {
    background-color: rgba(8, 22, 139, .3);
    border-radius: 100%;
    content: "";
    height: 968px;
    left: -200px;
    opacity: 1;
    position: absolute;
    right: 0;
    top: -205px;
    transform: skew(-1deg);
    width: 1240px;
    z-index: 0
}

.banner_section {
    padding-bottom: 200px;
    padding-top: 120px
}

.banner_wave {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    fill: #fff
}

.banner-shape {
    position: absolute;
    top: 0;
    left: 0
}

.banner_pattern {
    position: absolute;
    top: 150px;
    left: 50px
}

.scrolldown {
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    margin: 0 auto;
    text-align: center
}

.scrolldown a {
    border: 1px solid #fff;
    border-radius: 100%;
    color: #fff;
    display: block;
    line-height: 50px;
    margin: 0 auto;
    font-size: 30px;
    height: 50px;
    width: 50px
}

.vertical_social {
    background-color: #0e082c;
    position: fixed;
    left: 0;
    top: 50%;
    padding: 10px 0;
    text-align: center;
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 100
}

.vertical_social li {
    padding: 3px 15px
}

.vertical_social li a {
    color: #fff;
    display: block
}

.vertical_social li a:hover {
    color: #ff69c9
}

.bg-white-tran,
.tk_countdown.bg-white-tran {
    background-color: rgba(255, 255, 255, .1)
}

.presale_status {
    padding: 20px 40px;
    border-left: 1px solid rgba(255, 255, 255, .1)
}

.token_countdown {
    padding: 20px
}

@keyframes move_wave {
    0% {
        transform: translateX(0) translateZ(0)
    }

    50% {
        transform: translateX(-25%) translateZ(0)
    }

    100% {
        transform: translateX(-50%) translateZ(0)
    }
}

@keyframes move_wave_reverse {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1)
    }

    50% {
        transform: translateX(25%) translateZ(0) scaleY(.55)
    }

    100% {
        transform: translateX(50%) translateZ(0) scaleY(1)
    }
}

.waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 100px
}

.wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom
}

.waveTop {
    background-size: 50% 100px;
    background-image: url(../images/wave.png);
    animation: move_wave_reverse 10s linear infinite;
    right: 0;
    left: auto
}

.waveMiddle {
    background-size: 50% 100px;
    background-image: url(../images/wave.png);
    animation: move_wave 10s linear infinite
}

.icon_title {
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: capitalize
}

.currency_icon li {
    display: inline-block;
    margin-right: 20px;
    color: #fff
}

.currency_icon li i {
    font-size: 20px;
    margin-right: 10px
}

.banner_token {
    padding: 20px;
    border-radius: 10px 10px 0 0
}

@media(max-width:768px) {
    .special-text {
        text-align: center !important
    }
}

.token_col {
    width: 40%;
    padding: 0 15px
}

.progress_col {
    width: 60%;
    padding: 0 15px
}

.btn_col {
    width: 20%;
    padding: 0 15px
}

.banner_partner_logo {
    padding: 30px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .2);
    margin-top: -50px
}

.v_light_purple .tk_counter_inner .progress-bar {
    background-color: #461e74;
    color: #fff;
    font-weight: 400
}

.v_cyan_blue .tk_counter_inner .progress-bar {
    color: #0c0e27;
    font-weight: 500
}

.box_wrap {
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    margin-top: 30px;
    padding: 20px 15px;
    transition: all .5s ease 0s
}

.radius_box {
    border-radius: 5px
}

.box_wrap h4,
.work_inner h4 {
    color: #7a7a7a;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: 20px
}

.box_wrap p {
    margin: 0
}

.ripple_effect_left_bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 700px;
    height: 700px;
    overflow: hidden
}

.ripple_effect_right_top {
    position: absolute;
    top: 0;
    right: 0;
    width: 700px;
    height: 700px;
    overflow: hidden
}

.ripple_effect_right_top .circle_bg1 {
    border-radius: 100%;
    height: 100%;
    width: 100%;
    position: absolute;
    right: -350px;
    top: -350px;
    left: auto;
    bottom: auto
}

.circle_bg1 {
    border-radius: 100%;
    height: 100%;
    width: 100%;
    position: absolute;
    left: -350px;
    bottom: -350px
}

.circle_bg1 span {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    -moz-transform: scale(0);
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-animation-name: ripple;
    -moz-animation-name: ripple;
    -o-animation-name: ripple;
    animation-name: ripple;
    -webkit-animation-duration: 4s;
    -moz-animation-duration: 4s;
    -o-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-delay: 6s;
    -moz-animation-delay: 6s;
    -o-animation-delay: 6s;
    animation-delay: 6s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;
    border: 1px solid rgba(255, 255, 255, .2)
}

.circle_bg1 span:nth-child(2) {
    -webkit-animation-delay: 5s;
    -moz-animation-delay: 5s;
    -o-animation-delay: 5s;
    animation-delay: 5s
}

.circle_bg1 span:nth-child(3) {
    -webkit-animation-delay: 4s;
    -moz-animation-delay: 4s;
    -o-animation-delay: 4s;
    animation-delay: 4s
}

.circle_bg1 span:nth-child(4) {
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
    -o-animation-delay: 3s;
    animation-delay: 3s
}

.circle_bg1 span:nth-child(5) {
    -webkit-animation-delay: 2s;
    -moz-animation-delay: 2s;
    -o-animation-delay: 2s;
    animation-delay: 2s
}

.circle_bg1 span:nth-child(6) {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -o-animation-delay: 1s;
    animation-delay: 1s
}

@-webkit-keyframes ripple {
    0% {
        -webkit-transform: scale(.1);
        transform: scale(.01);
        opacity: 1
    }

    50% {
        -webkit-transform: scale(.5);
        transform: scale(.5);
        opacity: 1
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}

@-moz-keyframes ripple {
    0% {
        -moz-transform: scale(.1);
        transform: scale(.01);
        opacity: 1
    }

    50% {
        -moz-transform: scale(.5);
        transform: scale(.5);
        opacity: 1
    }

    100% {
        -moz-transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}

@-o-keyframes ripple {
    0% {
        -o-transform: scale(.1);
        transform: scale(.01);
        opacity: 1
    }

    50% {
        -o-transform: scale(.5);
        transform: scale(.5);
        opacity: 1
    }

    100% {
        -o-transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}

@keyframes ripple {
    0% {
        transform: scale(.1);
        transform: scale(.1);
        opacity: 1
    }

    50% {
        transform: scale(.5);
        transform: scale(.5);
        opacity: 1
    }

    100% {
        transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}

.circle_bg1 span::before {
    background-color: rgba(255, 255, 255, .2);
    border-radius: 100%;
    content: "";
    height: 15px;
    position: absolute;
    width: 15px
}

.circle_bg1 span:first-child:before {
    right: 10px;
    top: 230px
}

.circle_bg1 span:nth-child(2):before {
    right: 100px;
    top: 89px
}

.circle_bg1 span:nth-child(3):before {
    right: 240px;
    top: 7px
}

.circle_bg1 span:nth-child(4):before {
    right: 100px;
    top: 89px
}

.ripple_effect_right_top .circle_bg1 span:first-child:before {
    left: 8px;
    bottom: 236px;
    top: auto
}

.ripple_effect_right_top .circle_bg1 span:nth-child(2):before {
    left: 100px;
    bottom: 89px;
    top: auto
}

.ripple_effect_right_top .circle_bg1 span:nth-child(3):before {
    left: 240px;
    bottom: 7px;
    top: auto
}

.ripple_effect_right_top .circle_bg1 span:nth-child(4):before {
    left: 100px;
    bottom: 89px;
    top: auto
}

.circle_bg1.circle_bg_color1 span::before {
    background-color: #21d397
}

.box_wrapper {
    padding: 20px 15px;
    position: relative;
    margin-top: 20px;
    transition: all .5s ease-in-out
}

.icon_box {
    float: left;
    margin-right: 20px
}

.box_desc {
    overflow: hidden
}

.box_desc h4 {
    font-size: 18px;
    font-weight: 600
}

.box_desc p {
    margin: 0
}

.box_wrapper:hover {
    background-color: #fff
}

.box_wrapper:before {
    border-right: 1px solid #5957cd;
    border-top: 1px solid #5957cd;
    content: "";
    height: 0;
    position: absolute;
    right: 0;
    opacity: 0;
    top: 0;
    width: 0;
    visibility: hidden;
    transition: all .3s ease-in-out
}

.box_wrapper:after {
    bottom: 0;
    border-left: 1px solid #5957cd;
    border-bottom: 1px solid #5957cd;
    content: "";
    height: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    width: 0;
    visibility: hidden;
    transition: all .3s ease-in-out
}

.box_wrapper:hover:before,
.box_wrapper:hover:after {
    height: 40px;
    opacity: 1;
    width: 40px;
    visibility: visible
}

.presale_txt mark {
    border-radius: 4px;
    color: #fff;
    padding: 0 8px
}

.v_blue_pro .box_wrap {
    background-color: #4a49bf
}

.v_blue_pro .box_wrap h4,
.v_blue_pro .box_wrap p,
.v_dark .box_wrap h4,
.v_dark .box_wrap p,
.v_royal_blue .box_wrap h4,
.v_royal_blue .box_wrap p,
.v_navy_blue .box_wrap h4,
.v_navy_blue .box_wrap p {
    color: #fff
}

.v_dark .box_wrap {
    background-color: #121833
}

.v_light_purple .box_desc h4 {
    color: #6000b5
}

.v_light_purple .box_wrapper:hover:before,
.v_light_purple .box_wrapper:hover:after {
    border-color: #6000b5
}

.about_section {
    padding: 100px 50px 100px 80px
}

.about_shape::before {
    background-color: #5957cd;
    border-radius: 0 150px 150px 0;
    bottom: 0;
    content: "";
    left: 25px;
    position: absolute;
    right: -15px;
    top: 0;
    z-index: -1
}

.about_img img {
    margin: 0 auto
}

.about_img_shape::before {
    background-color: #fff;
    border-radius: 150px 0 0 150px;
    bottom: 0;
    content: "";
    left: 0;
    margin-left: -15px;
    margin-right: -25px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1
}

.about_shape .btn-primary {
    color: #fff
}

.about_shape .btn-primary:hover,
.about_shape .btn-primary.active.focus,
.about_shape .btn-primary.active:focus,
.about_shape .btn-primary.active:hover,
.about_shape .btn-primary:active:focus,
.about_shape .btn-primary:active:hover,
.about_shape .btn-primary.active,
.about_shape .btn-primary:active,
.about_shape .btn-primary.focus:active,
.about_shape .btn-primary:focus,
.about_shape .btn-primary.active:focus:not(:disabled):not(.disabled),
.about_shape .btn-primary:active:focus:not(:disabled):not(.disabled),
.about_shape .btn-primary.active:not(:disabled):not(.disabled),
.about_shape .btn-primary:active:not(:disabled):not(.disabled) {
    color: #fff
}

.about_shape .btn span::after,
.btn.text-white span::after {
    border-color: #fff
}

.highlight_txt {
    color: #5957cd;
    font-weight: 500;
    margin-bottom: 20px
}

.v_light_purple .highlight_txt,
.text-purple,
.text-purple.btn-primary:hover,
.text-purple.btn-primary.active.focus,
.text-purple.btn-primary.active:focus,
.text-purple.btn-primary.active:hover,
.text-purple.btn-primary:active:focus,
.text-purple.btn-primary:active:hover,
.text-purple.btn-primary.active,
.text-purple.btn-primary:active,
.text-purple.btn-primary.focus:active,
.text-purple.btn-primary:focus,
.text-purple.btn-primary.active:focus:not(:disabled):not(.disabled),
.text-purple.btn-primary:active:focus:not(:disabled):not(.disabled),
.text-purple.btn-primary.active:not(:disabled):not(.disabled),
.text-purple.btn-primary:active:not(:disabled):not(.disabled) {
    color: #6000b5
}

.btn.text-purple span::after {
    border-color: #6000b5
}

.btn.text-purple span {
    background-color: #6000b5
}

.about_shape_bg {
    background-image: url(../images/about_bg.png);
    background-position: center top;
    background-repeat: no-repeat
}

.work_icon {
    float: left;
    margin-right: 15px
}

.work_icon i {
    color: #5957cd;
    font-size: 30px
}

.work_inner {
    overflow: hidden
}

.work_inner h4 {
    margin-top: 0
}

.work_inner p {
    margin: 0
}

.rounded_shape::before {
    background-image: url(../images/rounded_shape.png);
    content: "";
    height: 644px;
    left: 0;
    position: absolute;
    top: 60%;
    width: 289px;
    z-index: 2
}

.video_wrap img {
    border-radius: 10px
}

.video_wrap::before {
    border: 3px solid #ff67cb;
    border-radius: 10px;
    bottom: 30px;
    content: "";
    left: -30px;
    position: absolute;
    right: -30px;
    top: -30px;
    z-index: -1
}

.video_wrap {
    position: relative
}

.bg_navy_blue.video_bg {
    bottom: 0;
    height: 150px;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%
}

.video_text {
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
    top: 50%;
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.video_text a {
    color: #fff;
    display: inline-block
}

.video_text span {
    display: block;
    font-size: 24px;
    font-weight: 700;
    padding-top: 30px
}

.video_text i {
    border-radius: 100%;
    color: #fff;
    display: inline-block;
    font-size: 50px;
    height: 85px;
    line-height: 90px;
    padding-left: 6px;
    width: 85px
}

.v_blue .work_icon i,
.v_blue .work_inner h4,
.v_blue .work_inner p,
.v_light_dark .work_icon i,
.v_light_dark .work_inner h4,
.v_light_dark .work_inner p {
    color: #fff
}

.about_logo_icon {
    background-color: #fff;
    border: 3px solid #0043bb;
    border-radius: 100%;
    display: table;
    height: 65px;
    left: 0;
    line-height: 58px;
    margin: 0 auto;
    padding-right: 2px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 50%;
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 65px
}

.section_token {
    position: relative
}

.tk_countdown_time {
    background-color: #5957cd;
    border-radius: 9px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .3);
    padding: 10px
}

.tk_countdown {
    background-color: #4241b8;
    background-position: right center;
    background-repeat: no-repeat;
    border-radius: 5px;
    padding: 35px
}

.banner_coundown {
    max-width: 460px;
    padding: 10px
}

.banner_coundown .tk_countdown_time {
    padding: 10px 0 0
}

.token_countdown_bg {
    background-image: url(../images/token_countdown_bg.png)
}

.countdown_shape {
    background-image: url(../images/counter_bg.png)
}

.tk_counter_inner {
    margin: 0 auto;
    max-width: 390px;
    width: 100%
}

.counter_box {
    color: #fff;
    display: inline-block;
    position: relative;
    width: 25%
}

.counter_box .tk_counter {
    display: block;
    font-size: 40px;
    font-weight: 600;
    padding: 10px
}

.counter_medium .counter_box .tk_counter {
    font-weight: 500
}

.counter_box .tk_counter::after {
    content: ":";
    font-size: 20px;
    font-weight: 600;
    left: 100%;
    position: absolute;
    top: 10px;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.counter_box:last-child .tk_counter:after {
    content: normal
}

.counter_box .tk_text {
    display: block;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase
}

.tk_countdown .btn {
    margin: 15px 0
}

.pr_box h6 {
    color: #ffcb68
}

.pr_box p {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    text-transform: uppercase
}

.pr_box {
    margin-top: 40px;
    text-align: center
}

.token_sale .pr_box:first-child {
    margin: 0
}

.token_chart {
    position: relative
}

.chart_list li {
    margin-bottom: 15px
}

.chart_list li:last-child {
    margin: 0
}

.chart_list h6 {
    color: #444;
    font-weight: 400
}

.chart_list .progress {
    border-radius: 0;
    font-weight: 600
}

.chart_list .progress-bar {
    display: block;
    line-height: 18px
}

.chart_list .bg-orange {
    background-color: #f6c59e
}

.bg-orange .progress-bar {
    background-color: #f69040
}

.chart_list .bg-green {
    background-color: #b7dfc9
}

.bg-green .progress-bar {
    background-color: #78c596
}

.chart_list .bg-red {
    background-color: #f4b8b9
}

.bg-red .progress-bar {
    background-color: #f17776
}

.chart_list .bg-blue {
    background-color: #82d3e2
}

.bg-blue .progress-bar {
    background-color: #0eadc9
}

.chart_list .bg-purple {
    background-color: #a9abd2
}

.bg-purple .progress-bar {
    background-color: #5b5da8
}

.chart_icon {
    left: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    -moz-transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    z-index: -1;
    text-align: center
}

.chart_bx {
    background-color: #fff;
    display: inline-block;
    margin-right: 5px;
    height: 7px;
    vertical-align: middle;
    width: 7px
}

.list_chart li {
    display: inline-block;
    padding: 0 5px;
    font-size: 14px;
    font-weight: 500
}

.list_chart li span {
    color: #fff
}

.color1 {
    background-color: #f69040
}

.color2 {
    background-color: #78c596
}

.color3 {
    background-color: #f17776
}

.color4 {
    background-color: #0eadc9
}

.color5 {
    background-color: #4241b8
}

.color6 {
    background-color: #4449cc
}

.color7 {
    background-color: #00e1f4
}

.color8 {
    background-color: #d26187
}

.color9 {
    background-color: #d4b630
}

.color10 {
    background-color: #0052ce
}

.color11 {
    background-color: #5b5da8
}

.color12 {
    background-color: #9a46cc
}

.color13 {
    background-color: #d3b62f
}

.chart_list_info li {
    background-color: #121a6d;
    border-radius: 5px;
    padding: 10px 20px;
    margin-bottom: 10px
}

.chart_list_info li:last-child {
    margin-bottom: 0
}

.chart_list_info li p {
    color: #fff;
    margin: 0
}

.chart_list_info li p span {
    color: #ffcc67
}

.token_info {
    border-radius: 10px
}

.token_info .tk_countdown_time {
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    padding: 0
}

.token_list_info {
    border-radius: 0 10px 10px 0;
    padding: 50px 50px 50px 100px;
    position: relative;
    overflow: hidden
}

.token_list_shape::before {
    background-color: #193dc0;
    bottom: 0;
    content: "";
    left: -20px;
    position: absolute;
    top: 0;
    transform: skewX(-5deg);
    width: 40px
}

.token_info .tk_counter_inner {
    padding: 40px 30px;
    max-width: 100%
}

.token_info .tk_counter_inner .btn {
    margin: 15px 0
}

.sale_info h6 {
    color: #ffcb68;
    margin: 0
}

.sale_info p {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin: 0
}

.sale_info p span {
    color: #65f479
}

.sale_info {
    margin-top: 30px
}

.token_list_info .col-md-6:nth-child(-n+2) .sale_info {
    margin-top: 0
}

.chart_info_list {
    margin-left: 40px
}

.chart_info_list span {
    font-size: 14px;
    font-weight: 500
}

.token_bg {
    background-image: url(../images/token_bg2.png);
    background-position: center center;
    background-repeat: no-repeat
}

.token_info_table .table td {
    border: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    padding: 12px 20px;
    vertical-align: middle
}

.table-dark {
    background-color: #0c0e27
}

.table-blue {
    background-color: #0b1f98;
    color: #fff
}

.table-navy-blue {
    background-color: #052d85;
    color: #fff
}

.table-navy-blue.table tr:nth-child(2n),
.v_navy_blue .token_detail li {
    background-color: #121a6d
}

.token_info_table .table td:first-child,
.token_info_table_s2 .table td:first-child {
    color: #ffcb68;
    font-size: 16px
}

.token_info_table table tr:nth-child(2n) {
    background-color: #262d4e
}

.token_dt {
    height: 100%;
    padding: 40px 30px
}

.token_dt .tk_counter_inner {
    margin: 0
}

.token_dt .progress {
    margin-bottom: 60px
}

.tk_border_white {
    border: 3px solid #fff
}

.token_detail {
    padding-left: 30px
}

.token_detail li h4 {
    color: #fff;
    font-size: 22px;
    font-weight: 600
}

.token_detail li span {
    color: #ffcb68
}

.token_detail li {
    background-color: #262d4e;
    border-radius: 5px;
    margin-bottom: 9px;
    padding: 14px
}

.token_detail li:last-child {
    margin-bottom: 0
}

.token_info_table_s2 .table td {
    border-color: #193dc0;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 15px;
    text-align: right
}

.token_info_table_s2 .table td:first-child {
    text-align: left
}

.token_info_table_s2 .table tr:first-child td,
.token_info_table_s2 .table tr:first-child th {
    border: 0
}

.doc_list {
    margin: 30px -10px 0
}

.doc_list li {
    float: left;
    padding: 0 10px;
    width: 20%
}

.doc_list li a {
    background-color: #121a6d;
    border-bottom: 3px solid #ff69c9;
    border-radius: 5px;
    color: #fff;
    display: block;
    font-weight: 600;
    padding: 20px 15px 20px 30px
}

.doc_list a:hover {
    color: #ff69c9
}

.list_none.doc_list span {
    float: right
}

.list_none.doc_list span i {
    font-size: 22px;
    vertical-align: middle
}

.chart_info_list li {
    margin: 5px 0
}

.token_sale_box {
    border: 2px solid #5957cd;
    border-radius: 5px;
    margin-top: 20px;
    padding: 20px 15px 15px
}

.token_sale_box h5 {
    font-weight: 600;
    margin-bottom: 5px
}

.token_sale_box span {
    color: #5957cd
}

.bonus_box {
    border-radius: 5px;
    margin-top: 30px;
    position: relative;
    overflow: hidden
}

.bonus_box h5 {
    background-color: #5957cd;
    color: #fff;
    padding: 20px;
    margin: 0
}

.discount_box {
    border-radius: 0 0 5px 5px;
    color: #5957cd;
    padding: 30px 15px;
    border: 2px solid #5957cd
}

.discount {
    font-size: 30px;
    font-weight: 500;
    margin-right: 5px
}

.bonnus_trip {
    color: #fff;
    position: absolute;
    left: -30px;
    top: 10px;
    transform: rotate(-40deg);
    line-height: 20px;
    width: 100px;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    height: 20px
}

.bonnus_trip::before {
    background-color: #feae02;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1
}

.chart_canvas {
    position: relative;
    margin-right: 40px
}

.chart_text {
    left: 0;
    position: absolute;
    padding: 0 50px;
    right: 0;
    text-align: center;
    top: 50%;
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.chart_text h4 {
    font-size: 28px;
    line-height: 40px;
    margin: 0
}

.chart_legend {
    border: 4px solid #280e3b;
    border-radius: 100%;
    display: table;
    height: 30px;
    margin-right: 10px;
    width: 30px
}

.color_box1 {
    border-color: #d3b62f
}

.color_box2 {
    border-color: #0052ce
}

.color_box3 {
    border-color: #00e0f4
}

.color_box4 {
    border-color: #d26086
}

.color_box5 {
    border-color: #4448cc
}

.chart_desc_list li {
    margin-bottom: 10px
}

.chart_list_txt h5 {
    font-size: 22px;
    font-weight: 600;
    margin: 0
}

.chart_list_txt p {
    font-size: 14px;
    margin: 0;
    line-height: normal
}

.token_sale_box_white {
    padding: 20px 15px 15px
}

.token_sale_box_white,
.token_sale_box_white h5 {
    color: #fff
}

.stage_title {
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    padding: 10px
}

.bonus_box2 {
    margin-top: 20px
}

.bonus_box2 h5 {
    font-weight: 700;
    margin: 0;
    text-transform: uppercase
}

.bonus_info {
    padding: 15px
}

.bonus_text_white h5,
.bonus_text_white h6,
.bonus_text_white a {
    color: #fff
}

.discount_text {
    color: #ffcb68;
    margin: 25px 0 15px
}

.discount_num {
    font-size: 20px
}

.bonus_text_white a {
    font-size: 20px;
    font-weight: 700
}

.bonus_text_white a.disabled {
    pointer-events: none;
    opacity: .6
}

.token_circle {
    position: relative;
    padding: 0
}

.token_circle::before {
    border-radius: 100%;
    height: 508px;
    width: 508px;
    content: "";
    background-color: rgba(255, 255, 255, .1);
    position: absolute;
    left: 50%;
    top: 50%;
    right: 0;
    bottom: 0;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.token_gradiant::after {
    border-radius: 100%;
    height: 600px;
    width: 600px;
    content: "";
    background-color: rgba(255, 255, 255, .05);
    position: absolute;
    left: 50%;
    top: 50%;
    right: 0;
    bottom: 0;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    z-index: -1
}

.token_gradiant:before {
    content: "";
    background: -moz-radial-gradient(center, ellipse cover, rgba(68, 109, 188, 1) 0%, rgba(0, 0, 255, 0) 70%);
    background: -webkit-gradient(radial, center center, 0px, center center, 70%, color-stop(0%, rgba(68, 109, 188, 1)), color-stop(70%, rgba(0, 0, 255, 0)));
    background: -webkit-radial-gradient(center, ellipse cover, rgba(68, 109, 188, 1) 0%, rgba(0, 0, 255, 0) 70%);
    background: -o-radial-gradient(center, ellipse cover, rgba(68, 109, 188, 1) 0%, rgba(0, 0, 255, 0) 70%);
    background: -ms-radial-gradient(center, ellipse cover, rgba(68, 109, 188, 1) 0%, rgba(0, 0, 255, 0) 70%);
    background: radial-gradient(ellipse at center, rgba(68, 109, 188, 1) 0%, rgba(0, 0, 255, 0) 70%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#446dbc', endColorstr='#0000ff', GradientType=1);
    border-radius: 100%;
    height: 600px;
    width: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    right: 0;
    bottom: 0;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.banner_light_gradiant {
    background: -moz-radial-gradient(center, ellipse cover, rgba(68, 109, 188, 1) 0%, rgba(0, 0, 255, 0) 70%);
    background: -webkit-gradient(radial, center center, 0px, center center, 70%, color-stop(0%, rgba(68, 109, 188, 1)), color-stop(100%, rgba(0, 0, 255, 0)));
    background: -webkit-radial-gradient(center, ellipse cover, rgba(68, 109, 188, 1) 0%, rgba(0, 0, 255, 0) 70%);
    background: -o-radial-gradient(center, ellipse cover, rgba(68, 109, 188, 1) 0%, rgba(0, 0, 255, 0) 70%);
    background: -ms-radial-gradient(center, ellipse cover, rgba(68, 109, 188, 1) 0%, rgba(0, 0, 255, 0) 70%);
    background: radial-gradient(ellipse at center, rgba(68, 109, 188, 1) 0%, rgba(0, 0, 255, 0) 70%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#446dbc', endColorstr='#0000ff', GradientType=1);
    border-radius: 100%;
    height: 500px;
    width: 500px;
    position: absolute;
    opacity: .5;
    left: -10%;
    top: -20%;
    z-index: 0
}

.tk_ending_txt {
    color: #b8bbd4;
    font-size: 14px;
    display: inline-block;
    border-top: 1px solid rgba(255, 255, 255, .5);
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    padding: 5px;
    margin: 15px 0 25px;
    width: 100%
}

.banner_vr_social li {
    float: none;
    margin-right: 0;
    margin-bottom: 20px
}

.banner_vr_social li:last-child {
    margin-bottom: 0
}

.v_blue_pro .tk_countdown {
    background-color: #5857ce;
    background-position: center center;
    background-size: cover
}

.v_blue_pro .tk_countdown_time {
    background-color: #4a49bf
}

.v_blue .banner_inner .tk_countdown {
    background-color: rgba(18, 26, 109, .9)
}

.v_blue .banner_inner .tk_countdown_time,
.v_royal_blue .banner_inner .tk_countdown_time {
    background-color: transparent;
    border: 1px solid #fff;
    box-shadow: none
}

.v_blue .tk_counter_inner .progress,
.v_blue .tk_counter_inner .progress-bar,
.v_royal_blue .tk_counter_inner .progress,
.v_royal_blue .tk_counter_inner .progress-bar,
.v_navy_blue .tk_counter_inner .progress,
.v_navy_blue .tk_counter_inner .progress-bar {
    color: #052d85
}

.v_blue .social_icon li a {
    color: #0d469f
}

.v_blue .social_icon li a:hover {
    color: #ff69c9
}

.v_blue .tk_countdown {
    background-color: #121a6d;
    background-position: center center;
    box-shadow: 0 0 8px rgba(0, 0, 0, .3)
}

.v_blue .tk_countdown_time {
    background-color: #052d85
}

.v_dark .tk_countdown {
    background-color: #0c0e27;
    background-position: center center
}

.v_dark .tk_countdown_time {
    background-color: #121833
}

.v_dark .tk_counter_inner .progress,
.v_dark .tk_counter_inner .progress-bar,
.v_light_dark .tk_counter_inner .progress,
.v_light_dark .tk_counter_inner .progress-bar {
    color: #0c0e27
}

.v_blue_light .tk_counter_inner .progress,
.v_blue_light .tk_counter_inner .progress-bar {
    color: #081990
}

.v_light_dark .tk_countdown {
    background-color: rgba(18, 24, 51, .9)
}

.v_royal_blue .banner_inner .tk_countdown {
    background-color: rgba(8, 25, 144, .9)
}

.v_light_purple .tk_countdown {
    background-image: -webkit-linear-gradient(left, #6000b5 0%, #3e2a9c 99%);
    background-image: linear-gradient(to right, #6000b5 0%, #3e2a9c 99%)
}

.v_light_purple .bonus_box h5 {
    background-color: #6000b5
}

.v_light_purple .token_sale_box {
    border-color: #6000b5
}

.v_light_purple .token_sale_box h5,
.v_light_purple .token_sale_box span,
.v_light_purple .discount_box,
.v_light_purple .chart_text h4,
.v_light_purple .chart_list_txt h5 {
    color: #6000b5
}

.v_light_purple .discount_box {
    border-color: #6000b5
}

.v_light_purple .current .discount_box {
    border-color: #3e1084
}

.v_light_purple .bonus_box.current h5 {
    background-color: #3e1084
}

.roadmap {
    position: relative;
    display: block;
    padding: 0 100px
}

.roadmap_box {
    margin-top: 115px;
    position: relative;
    text-align: center
}

.icon_roadmap {
    color: #fff;
    left: 0;
    position: absolute;
    right: 0;
    top: -115px;
    z-index: 9
}

.icon_roadmap i {
    font-size: 38px
}

.roadmap.gradient_box {
    background: transparent none repeat scroll 0 0
}

.roadmap::before {
    border-top: 1px dashed rgba(255, 255, 255, .6);
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 80px
}

.roadmap_icon {
    background-color: #fff;
    border-radius: 100%;
    height: 20px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: -45px;
    width: 20px
}

.rd_complete .roadmap_icon {
    background-color: #ff67cb
}

.roadmap_icon::before {
    border: 3px solid #fff;
    border-radius: 100%;
    bottom: 0;
    content: "";
    left: 0;
    margin: -10px;
    position: absolute;
    right: 0;
    top: 0
}

.rd_complete .roadmap_icon {
    height: 15px;
    top: -42px;
    width: 15px
}

.rd_complete.current .roadmap_icon {
    height: 20px;
    top: -45px;
    width: 20px
}

.rd_complete .roadmap_icon::before {
    margin: -8px
}

.rd_complete.current .roadmap_icon::before {
    margin: -10px
}

.roadmap_inner,
.timeline_inner {
    border-radius: 5px;
    padding: 10px 5px;
    position: relative
}

.roadmap_box.current .roadmap_inner,
.timeline_box.current .timeline_inner {
    background-color: #ff67cb
}

.roadmap_box.current .roadmap_inner::before,
.timeline_box.current .timeline_inner::before {
    border-color: transparent transparent #ff67cb;
    border-style: solid;
    border-width: 0 8px 8px;
    content: "";
    height: 0;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: -8px;
    width: 0
}

.roadmap_box h6,
.timeline_box h6 {
    color: #fff
}

.roadmap_box p,
.timeline_box p {
    color: #fff;
    font-size: 14px;
    line-height: 26px;
    margin: 0
}

.roadmap .owl-prev,
.roadmap .owl-next {
    position: absolute;
    top: 63px
}

.roadmap .owl-prev {
    left: 50px
}

.roadmap .owl-next {
    right: 50px
}

.roadmap .owl-nav i {
    background-color: #fff;
    border-radius: 100%;
    color: #5957cd;
    display: block;
    font-size: 26px;
    height: 33px;
    line-height: 37px;
    text-align: center;
    width: 33px
}

.roadmap .owl-nav i:hover,
.timeline .owl-nav i:hover {
    background-color: #ff67cb;
    color: #fff
}

.roadmap .owl-prev i,
.timeline .owl-prev i {
    padding-right: 3px
}

.roadmap .owl-next i,
.timeline .owl-next i {
    padding-left: 3px
}

.roadmap .owl-nav .disabled {
    cursor: default
}

.roadmap .owl-nav .disabled i,
.timeline .owl-nav .disabled i {
    background-color: #fff !important;
    color: #5957cd
}

.single_roadmap h6 {
    color: #fff;
    font-weight: 600;
    left: 0;
    position: absolute;
    right: 0;
    top: -50px
}

.roadmap_list .col-lg:nth-child(2n) .single_roadmap h6 {
    bottom: -60px;
    top: auto
}

.roadmap_list p {
    color: #fff;
    margin: 0
}

.roadmap_list {
    margin-bottom: 200px;
    padding: 0 50px;
    position: relative;
    text-align: center
}

.single_roadmap {
    padding: 0 0 130px
}

.roadmap_list .col-lg:nth-child(2n+1) .single_roadmap {
    left: 0;
    padding: 130px 0 0;
    position: absolute
}

.single_roadmap .roadmap_icon {
    background-color: #fff;
    border-radius: 100%;
    height: 20px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: -9px;
    width: 20px
}

.single_roadmap .roadmap_icon::before {
    border: 3px solid #fff;
    border-radius: 100%;
    bottom: 0;
    content: "";
    left: 0;
    margin: -10px;
    position: absolute;
    right: 0;
    top: 0
}

.roadmap_list .col-lg:nth-child(2n) .single_roadmap .roadmap_icon {
    bottom: -10px;
    top: auto
}

.single_roadmap::before {
    border-left: 1px dashed rgba(255, 255, 255, .6);
    content: "";
    height: 90px;
    left: 50%;
    position: absolute;
    top: 20px;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.single_roadmap::after {
    background-color: #fff;
    border-radius: 100%;
    content: "";
    height: 9px;
    left: 50%;
    position: absolute;
    top: 110px;
    width: 9px;
    -moz-transform: translateX(-50%);
    -weblit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.roadmap_list .col-lg:nth-child(2n) .single_roadmap::before {
    bottom: 20px;
    top: auto
}

.roadmap_list .col-lg:nth-child(2n) .single_roadmap::after {
    bottom: 110px;
    top: auto
}

.roadmap_list::before {
    border-bottom: 1px dashed rgba(255, 255, 255, .6);
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 100%
}

.single_roadmap.roadmap_done .roadmap_icon {
    background-color: #ff67cb
}

.box_roadmap {
    margin-top: 120px;
    position: relative;
    text-align: center
}

.box_roadmap .roadmap_inner {
    padding: 20px 5px 0
}

.roadmap_wrap::before {
    border-top: 1px dashed rgba(255, 255, 255, .6);
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    top: 17px;
    width: 100%
}

.box_roadmap h6 {
    color: #fff
}

.box_roadmap p {
    color: #fff;
    font-size: 14px;
    line-height: 26px;
    margin: 0
}

.box_roadmap .roadmap_inner::before {
    border-left: 1px dashed rgba(255, 255, 255, .6);
    content: "";
    height: 86px;
    left: 50%;
    position: absolute;
    top: -86px
}

.box_roadmap .roadmap_inner::after {
    background-color: #ff67cb;
    border-radius: 100%;
    content: "";
    height: 10px;
    left: 50%;
    position: absolute;
    top: 0;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 10px;
    z-index: 0
}

.box_roadmap.rd_complete .roadmap_icon::after {
    color: #fff;
    content: "";
    font-family: ionicons;
    font-size: 14px;
    left: 6px;
    line-height: 16px;
    position: absolute;
    top: 3px
}

.box_roadmap .roadmap_icon {
    height: 24px;
    top: -115px;
    width: 24px
}

.box_roadmap .roadmap_icon::before {
    background-color: rgba(255, 255, 255, .5);
    border: 0;
    margin: -4px;
    z-index: -1
}

.roadmap_wrap .owl-prev {
    left: -20px
}

.roadmap_wrap .owl-next {
    right: -20px
}

.roadmap_wrap .owl-nav i {
    color: #fff;
    display: block;
    font-size: 26px;
    text-align: center
}

.roadmap_wrap .owl-nav i:hover {
    color: #ff67cb
}

.roadmap_wrap .owl-prev,
.roadmap_wrap .owl-next {
    position: absolute;
    top: 4px
}

.timeline_wrap {
    padding-top: 30px;
    position: relative
}

.timeline_wrap::before {
    background-color: #0043bb;
    bottom: 0;
    content: "";
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    width: 1px
}

.timeline_block {
    display: inline-block;
    position: relative;
    margin-bottom: 30px
}

.timeline_icon.tm_complete {
    background-color: rgba(7, 24, 144, .5);
    color: #fff
}

.timeline_icon.tm_complete::before {
    background-color: #071890;
    border-radius: 100%;
    bottom: 0;
    content: "";
    height: 8px;
    left: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 8px
}

.timeline_icon {
    background-color: #071890;
    border-radius: 100%;
    font-size: 12px;
    height: 20px;
    left: 50%;
    line-height: 23px;
    position: absolute;
    text-align: center;
    top: 15px;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 20px
}

.timeline_content {
    background-color: #071890;
    border-radius: 5px;
    padding: 15px;
    position: relative;
    text-align: right;
    width: 46%
}

.timeline_content h6 {
    color: #fff
}

.timeline_content p {
    color: #fff;
    font-size: 14px;
    line-height: normal;
    margin: 0
}

.timeline_block:nth-child(2n) .timeline_content {
    float: right;
    text-align: left
}

.tm_date {
    color: #071890;
    font-weight: 600;
    left: 115%;
    line-height: normal;
    position: absolute;
    text-align: left;
    top: 12px;
    width: 100%
}

.timeline_content::before {
    border-color: transparent transparent transparent #071890;
    border-style: solid;
    border-width: 9px 0 9px 9px;
    content: "";
    height: 0;
    position: absolute;
    right: -9px;
    top: 17px;
    width: 0
}

.timeline_block:nth-child(2n) .timeline_content::before {
    border-color: transparent #071890 transparent transparent;
    border-width: 9px 9px 9px 0;
    left: -9px;
    right: auto
}

.timeline_block:nth-child(2n) .tm_date {
    left: auto;
    right: 115%;
    text-align: right
}

.timeline_box {
    margin-top: 45px;
    position: relative;
    text-align: center
}

.timeline::before {
    background-color: rgba(255, 255, 255, .2);
    content: "";
    height: 5px;
    left: 0;
    position: absolute;
    top: 15px;
    width: 100%
}

.timeline .owl-prev,
.timeline .owl-next {
    position: absolute;
    top: 0
}

.timeline .owl-nav i {
    background-color: #fff;
    border-radius: 100%;
    color: #5957cd;
    display: block;
    font-size: 26px;
    height: 33px;
    line-height: 37px;
    text-align: center;
    width: 33px
}

.timeline .owl-prev {
    left: -30px
}

.timeline .owl-next {
    right: -30px
}

.timeline_circle {
    background-color: #fff;
    border-radius: 100%;
    height: 13px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: -34px;
    width: 13px
}

.timeline_circle::before {
    border: 2px solid #fff;
    border-radius: 100%;
    bottom: 0;
    content: "";
    left: 0;
    margin: -6px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0
}

.timeline_box.complete .timeline_circle::before {
    border-color: #ff67cb;
    margin: -8px;
    background-color: #ff67cb;
    z-index: -1
}

.timeline_box.complete::before {
    content: "";
    position: absolute;
    left: -50%;
    top: -30px;
    background-color: #ff67cb;
    height: 5px;
    z-index: -2;
    width: 110%;
    margin-left: -30px
}

.v_light_dark .roadmap .owl-nav i,
.v_light_dark .roadmap .owl-nav .disabled i:hover {
    color: #121833
}

.v_light_dark .roadmap .owl-nav i:hover {
    color: #fff
}

.v_blue .roadmap .owl-nav i,
.v_blue .roadmap .owl-nav .disabled i:hover {
    color: #121a6d
}

.v_blue .roadmap .owl-nav i:hover {
    color: #fff
}

.v_blue_light .roadmap_list h6,
.v_blue_light .roadmap_list p {
    color: #7a7a7a
}

.v_blue_light .single_roadmap::before,
.v_blue_light .single_roadmap .roadmap_icon::before,
.v_blue_light .roadmap_list::before {
    border-color: #193dc0
}

.v_blue_light .single_roadmap .roadmap_icon,
.v_blue_light .single_roadmap::after {
    background-color: #193dc0
}

.v_dark .timeline .owl-nav i {
    color: #0c0e27
}

.v_dark .timeline .owl-nav [class*=owl-]:not(.disabled) i:hover,
.v_navy_blue .timeline .owl-nav [class*=owl-]:not(.disabled) i:hover,
.v_cyan_blue .timeline .owl-nav [class*=owl-]:not(.disabled) i:hover {
    color: #fff
}

.v_navy_blue .timeline .owl-nav i {
    color: #0043bb
}

.v_cyan_blue .timeline .owl-nav i {
    color: #0e082c
}

.mobile_app {
    text-align: right
}

.mobile_shape {
    background-image: url(../images/mobile_shape_bg.png);
    background-repeat: no-repeat;
    background-position: center right
}

.app_list li {
    margin-bottom: 40px
}

.mobileapp_icon {
    border-radius: 100%;
    float: left;
    height: 68px;
    padding: 15px 0;
    text-align: center;
    vertical-align: middle;
    width: 68px
}

.mobileapp_icon i {
    color: #fff;
    font-size: 36px
}

.mobileapp_desc {
    overflow: hidden;
    padding-left: 20px
}

.mobileapp_desc h5 {
    font-size: 18px;
    color: #fff
}

.mobileapp_desc p {
    font-size: 14px;
    color: #fff;
    margin: 0
}

.app_content li {
    margin-bottom: 20px
}

.app_content li:last-child {
    margin-bottom: 0
}

.app_icon {
    float: left;
    margin-right: 30px
}

.app_desc {
    overflow: hidden
}

.app_desc h6 {
    font-size: 18px;
    font-weight: 600
}

.app_desc h6,
.app_desc p {
    color: #fff
}

.app_desc p {
    font-size: 14px
}

.app_right_content .app_icon {
    float: right;
    margin-left: 30px;
    margin-right: 0
}

.app_right_content .app_desc {
    text-align: right
}

.list_dash {
    margin-bottom: 30px
}

.list_dash li {
    list-style: outside none none;
    padding-left: 15px;
    position: relative
}

.list_dash li::before {
    background-color: #7a7a7a;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    top: 14px;
    width: 7px
}

.list_white li {
    color: #fff
}

.list_white li::before {
    background-color: #fff
}

.v_light_purple .app_desc h6 {
    color: #6000b5;
    margin-bottom: 3px
}

.v_light_purple .app_desc p {
    color: #7a7a7a
}

.team_info {
    padding-top: 15px
}

.team_info h4 a {
    color: #444;
    font-size: 20px;
    font-weight: 500
}

.team_info p {
    line-height: normal;
    margin: 0
}

.team_img {
    box-shadow: 0 0 15px rgba(0, 0, 0, .15);
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    max-width: 200px
}

.team_img::before {
    background-color: #5957cd;
    border-radius: 100%;
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    margin: 10px;
    opacity: .6;
    position: absolute;
    right: 0;
    top: 0;
    -moz-transform: scale(0);
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: all .5s ease 0s
}

.team_img.gradient_box::before {
    background-image: -webkit-linear-gradient(left, #ff67cb 0%, #ffcc67 99%);
    background-image: linear-gradient(to right, #ff67cb 0%, #ffcc67 99%)
}

.team_img.rounded_img.gradient_box {
    background: transparent none repeat scroll 0 0 !important
}

.team_img:hover:before {
    border-radius: 0;
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1)
}

.team_img img,
.team_image img {
    border: 10px solid #fff;
    width: 100%
}

.team_img.rounded_img,
.team_img.rounded_img img,
.team_image.rounded_img {
    border-radius: 100%
}

.team_img.rounded_img:hover:before {
    border-radius: 100%
}

.social_team {
    left: 0;
    position: absolute;
    right: 0;
    top: 50%;
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.social_team li {
    display: inline-block;
    -moz-transform: scale(0);
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: all .3s ease 0s
}

.team_img:hover .social_team li {
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1)
}

.social_team a {
    color: #fff;
    display: block;
    font-size: 18px;
    padding: 0 5px;
    position: relative;
    text-align: center;
    z-index: 1
}

.social_team a:hover {
    color: #ff67cb
}

.gradient_box .social_team a:hover {
    color: #444
}

.team_title {
    background-image: -webkit-linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000000 99%);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000000 99%);
    bottom: 0;
    left: 0;
    padding: 70px 0 10px;
    position: absolute;
    right: 0
}

.team_img_wrap {
    position: relative
}

.team_title h4 {
    color: #fff !important;
    margin: 0
}

.team_title span {
    color: #fff
}

.mfp-bg {
    background-color: #5957cd;
    opacity: .8
}

.team_pop {
    background-color: #fff;
    border-radius: 10px;
    margin: 30px auto;
    max-width: 945px;
    padding: 30px 10px;
    position: relative
}

.social_single_team li {
    display: inline-block
}

.social_single_team li a {
    border: 1px solid #5957cd;
    border-radius: 40px;
    display: block;
    height: 40px;
    line-height: 30px;
    padding: 5px;
    width: 40px
}

.mfp-close-btn-in .mfp-close {
    font-size: 32px;
    right: -50px;
    top: 0;
    color: #fff;
    width: auto
}

.mfp-close-btn-in .team_pop .mfp-close {
    color: #5957cd;
    background-color: #fff;
    width: 44px
}

.team_pop h6 {
    color: #444
}

.team_pop .progress {
    border-radius: 0;
    height: 4px
}

.team_pop .progress-bar {
    background-image: -webkit-linear-gradient(left, #ff67cb 0%, #ffcc67 99%);
    background-image: linear-gradient(to right, #ff67cb 0%, #ffcc67 99%)
}

.team_wrap .team_info h4 a {
    font-size: 18px
}

.team_wrap .team_info p {
    font-size: 14px
}

.team_box_s1 .team_box::before {
    background-color: #02126e;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 100px;
    z-index: -1
}

.team_box_s1 .team_box {
    height: 100%
}

.team_box_s1 .team_info {
    padding-bottom: 15px
}

.team_box_s2 .team_box {
    background-color: #121a6d;
    padding: 20px;
    height: 100%
}

.team_image {
    box-shadow: 0 0 15px rgba(0, 0, 0, .15);
    margin: 0 auto;
    max-width: 170px
}

.team_social li {
    display: inline-block
}

.team_social a {
    color: #7a7a7a;
    display: block;
    padding: 5px
}

.team_box_s3 {
    padding: 20px
}

.team_social_s2 {
    background-image: -webkit-linear-gradient(top, #ff67cb 0%, #ffcc67 99%);
    background-image: linear-gradient(to bottom, #ff67cb 0%, #ffcc67 99%);
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 40px;
    padding: 15px 10px
}

.team_social_s2 a {
    color: #fff
}

.team_social_s2 a:hover {
    color: #444
}

.v_blue_pro .team_info h4 a,
.v_blue_pro .team_info p,
.v_blue .team_info h4 a,
.v_blue .team_info p,
.v_dark .team_info h4 a,
.v_dark .team_info p,
.v_royal_blue .team_info h4 a,
.v_royal_blue .team_info p,
.v_navy_blue .team_info h4 a,
.v_navy_blue .team_info p {
    color: #fff
}

.v_blue .mfp-bg,
.v_navy_blue .mfp-bg {
    background-color: #052d85
}

.v_blue_light .mfp-bg,
.v_royal_blue .mfp-bg {
    background-color: #193dc0
}

.v_blue .social_single_team li a,
.v_blue .mfp-close-btn-in .team_pop .mfp-close,
.v_blue .team_pop h1,
.v_blue .team_pop h2,
.v_blue .team_pop h3,
.v_blue .team_pop h4,
.v_blue .team_pop h5,
.v_blue .team_pop h6 {
    color: #0a257c
}

.v_blue_light .social_single_team li a,
.v_blue_light .mfp-close-btn-in .team_pop .mfp-close,
.v_blue_light .team_pop h1,
.v_blue_light .team_pop h2,
.v_blue_light .team_pop h3,
.v_blue_light .team_pop h4,
.v_blue_light .team_pop h5,
.v_blue_light .team_pop h6,
.v_royal_blue .social_single_team li a,
.v_royal_blue .mfp-close-btn-in .team_pop .mfp-close,
.v_royal_blue .team_pop h1,
.v_royal_blue .team_pop h2,
.v_royal_blue .team_pop h3,
.v_royal_blue .team_pop h4,
.v_royal_blue .team_pop h5,
.v_royal_blue .team_pop h6 {
    color: #0043bb
}

.v_blue .social_single_team li a {
    border-color: #0a257c
}

.v_blue_light .social_single_team li a,
.v_royal_blue .social_single_team li a {
    border-color: #0043bb
}

.v_dark .mfp-bg,
.v_light_dark .mfp-bg {
    background-color: #0c0e27
}

.v_light_purple .mfp-bg {
    background-color: #6000b5
}

.v_dark .social_single_team li a,
.v_dark .mfp-close-btn-in .team_pop .mfp-close,
.v_dark .team_pop h1,
.v_dark .team_pop h2,
.v_dark .team_pop h3,
.v_dark .team_pop h4,
.v_dark .team_pop h5,
.v_dark .team_pop h6,
.v_light_dark .social_single_team li a,
.v_light_dark .mfp-close-btn-in .team_pop .mfp-close,
.v_light_dark .team_pop h1,
.v_light_dark .team_pop h2,
.v_light_dark .team_pop h3,
.v_light_dark .team_pop h4,
.v_light_dark .team_pop h5,
.v_light_dark .team_pop h6 {
    color: #0c0e27
}

.v_blue .social_single_team li a:hover,
.v_dark .social_single_team li a:hover,
.v_light_dark .social_single_team li a:hover {
    color: #ff69c9
}

.v_dark .social_single_team li a,
.v_light_dark .social_single_team li a {
    border-color: #0c0e27
}

.v_navy_blue .social_single_team li a {
    border-color: #0043bb
}

.v_navy_blue .social_single_team li a,
.v_navy_blue .mfp-close-btn-in .team_pop .mfp-close,
.v_navy_blue .team_pop h1,
.v_navy_blue .team_pop h2,
.v_navy_blue .team_pop h3,
.v_navy_blue .team_pop h4,
.v_navy_blue .team_pop h5,
.v_navy_blue .team_pop h6 {
    color: #0043bb
}

.v_light_purple .social_single_team li a,
.v_light_purple .mfp-close-btn-in .team_pop .mfp-close,
.v_light_purple .team_pop h1,
.v_light_purple .team_pop h2,
.v_light_purple .team_pop h3,
.v_light_purple .team_pop h4,
.v_light_purple .team_pop h5,
.v_light_purple .team_pop h6 {
    color: #6000b5
}

.v_light_purple .social_single_team li a {
    border-color: #6000b5
}

.v_light_purple .team_img::before {
    background-color: rgba(96, 0, 181, .7)
}

.v_cyan_blue .social_single_team li a,
.v_cyan_blue .mfp-close-btn-in .team_pop .mfp-close,
.v_cyan_blue .team_pop h1,
.v_cyan_blue .team_pop h2,
.v_cyan_blue .team_pop h3,
.v_cyan_blue .team_pop h4,
.v_cyan_blue .team_pop h5,
.v_cyan_blue .team_pop h6 {
    color: #0e082c
}

.v_cyan_blue .social_single_team li a {
    border-color: #0e082c
}

.v_cyan_blue .mfp-bg {
    background-color: #193d85
}

.faq_question .card {
    border: 0;
    background-color: transparent
}

.faq_question .card-header {
    background-color: transparent;
    border: 0;
    padding: 0;
    z-index: 2
}

.faq_question .card-header a::after {
    content: "\\f105";
    font-family: ionicons;
    font-size: 20px;
    font-weight: 400;
    position: absolute;
    right: 15px;
    top: 14px
}

.faq_question .card-header a.collapsed::after {
    content: "\\f10b"
}

.faq_question .card-header a::before {
    content: "?";
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    height: 30px;
    width: 30px;
    background-color: #5957cd;
    border-radius: 100%;
    color: #fff;
    margin-right: 10px;
    padding: 5px 0;
    vertical-align: middle;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%)
}

.faq_question .card-header a {
    background-color: #fff;
    border: 1px solid #5957cd;
    border-radius: 5px 5px 0 0;
    display: block;
    font-size: 18px;
    font-weight: 600;
    padding: 15px 30px 15px 50px;
    position: relative;
    margin-top: 10px
}

.faq_question .card-header a[aria-expanded=false] {
    background-color: transparent;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    margin: 0
}

.faq_question .card-body {
    background-color: #fff;
    border: 1px solid #5957cd;
    border-top: 0;
    border-radius: 0 0 5px 5px;
    position: relative;
    padding-left: 40px;
    line-height: 24px
}

.faq_question .card-body::before {
    content: "";
    border-left: 2px solid #e5e5e5;
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    margin: 20px 0
}

.faq_content .card {
    background-color: transparent;
    border: 0;
    border-radius: 0;
    margin-bottom: 10px
}

.faq_content .card:last-child {
    margin-bottom: 0
}

.faq_content .card-header,
.faq_content5 .card-header {
    background-color: transparent;
    border: 0;
    padding: 0;
    z-index: 2
}

.faq_content .card-header a {
    background-color: #5957cd;
    color: #fff;
    border: 1px solid #5957cd;
    border-radius: 5px 5px 0 0;
    display: block;
    font-weight: 600;
    padding: 15px 40px 15px 15px
}

.faq_content .card-header a.collapsed {
    background-color: #fff;
    border-radius: 5px;
    color: #5957cd
}

.faq_content .card-body {
    background-color: #5957cd;
    border-radius: 0 0 5px 5px;
    color: #fff;
    padding: 10px 15px;
    position: relative;
    z-index: 1
}

.faq_content .card-header a::after {
    color: #fff;
    content: "\\f126";
    font-family: ionicons;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    right: 15px;
    top: 14px
}

.faq_content .card-header a.collapsed:after {
    content: "\\f123";
    color: #5957cd
}

.faq_content .card-header a::before {
    content: "Q.";
    font-weight: 600;
    margin-right: 5px
}

.card-body::before {
    content: "A.";
    font-weight: 600;
    margin-right: 5px
}

.tab_content ul {
    margin: 0 -10px
}

.tab_content .nav-item {
    padding: 0 10px
}

.tab-link {
    display: block;
    padding: 8px 16px;
    text-transform: capitalize
}

.tab-link {
    background-color: #071890;
    border-radius: 5px;
    color: #fff
}

.tab-link.active,
.tab-link.active:hover,
.tab-link:hover {
    background-color: #ff68ca;
    color: #fff
}

.tab_content .tab-content {
    margin-top: 30px
}

.faq_content2 .card {
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    margin-bottom: 10px
}

.faq_content2 .card:last-child {
    margin: 0
}

.faq_content2 .card-header {
    background-color: transparent;
    border: 0;
    padding: 0;
    z-index: 2
}

.faq_content2 .card-header a::before {
    content: "Q.";
    font-weight: 600;
    margin-right: 5px
}

.faq_content2 .card-header a::after {
    color: #fff;
    content: "\\f126";
    font-family: ionicons;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    right: 15px;
    top: 14px
}

.faq_content2 .card-header a.collapsed:after {
    content: "\\f123";
    color: #fff
}

.faq_content2 .card-header a {
    display: block;
    font-weight: 600;
    padding: 15px 40px 15px 15px
}

.faq_content2 .card-body {
    padding: 10px 15px
}

.faq_content2 .card-header a,
.faq_content2 .card-body {
    color: #fff
}

.tab_s2 .tab-link {
    border-radius: 0;
    margin-bottom: 2px;
    padding: 10px 20px
}

.tab_nav_s2 li.nav-item {
    border-right: 1px solid #0043bb;
    padding: 0 25px
}

.tab_nav_s2 li.nav-item:last-child {
    border-right: 0
}

.tab_nav_s2 li.nav-item a.active,
.tab_nav_s2 li.nav-item a:hover {
    color: #ff69c9
}

.tab_color_white a {
    color: #fff
}

.tab_nav_s2.tab_color_white li.nav-item {
    border-color: #fff
}

.tab_nav_s3 li.nav-item {
    padding: 0 10px
}

.tab_nav_s3 li.nav-item a {
    border-radius: 5px;
    color: #fff;
    display: block;
    padding: 6px 25px;
    text-align: center
}

.tab_nav_s3 li.nav-item a.active {
    background-color: rgba(255, 255, 255, .5)
}

.faq_content3 .card {
    background-color: rgba(255, 255, 255, .2);
    border: 0;
    border-radius: 5px;
    margin-bottom: 10px
}

.faq_content3 .card:last-child {
    margin: 0
}

.faq_content3 .card-header {
    background-color: transparent;
    border: 0;
    padding: 0;
    z-index: 2
}

.faq_content3 .card-header a::before {
    content: "Q.";
    font-weight: 600;
    margin-right: 5px
}

.faq_content3 .card-header a::after {
    color: #fff;
    content: "\\f126";
    font-family: ionicons;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    right: 15px;
    top: 14px
}

.faq_content3 .card-header a.collapsed:after {
    content: "\\f123";
    color: #fff
}

.faq_content3 .card-header a {
    display: block;
    font-weight: 600;
    padding: 15px 40px 15px 15px
}

.faq_content3 .card-body {
    padding: 10px 15px
}

.faq_content3 .card-header a,
.faq_content3 .card-body {
    color: #fff
}

.tab_nav_s4 li.nav-item {
    padding: 0 5px
}

.tab_nav_s4 li.nav-item a {
    border-radius: 40px;
    color: #0e082c;
    display: block;
    padding: 3px 20px;
    text-align: center;
    border: 1px solid #0e082c
}

.tab_nav_s4 li.nav-item a.active {
    background-color: #ff6cc6;
    border-color: #ff6cc6;
    color: #fff
}

.faq_content4 .card {
    background-color: #f0f1f4;
    border: 0;
    border-radius: 5px;
    margin-bottom: 10px
}

.faq_content4 .card:last-child {
    margin: 0
}

.faq_content4 .card-header {
    background-color: transparent;
    border: 0;
    padding: 0;
    z-index: 2
}

.faq_content4 .card-header a::before {
    content: "Q.";
    font-weight: 600;
    margin-right: 5px
}

.faq_content4 .card-header a::after {
    background-image: -webkit-linear-gradient(left, #ff67cb 0%, #ffcc67 99%);
    background-image: linear-gradient(to right, #ff67cb 0%, #ffcc67 99%);
    border-radius: 100%;
    color: #fff;
    content: "\\f208";
    font-family: ionicons;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    position: absolute;
    right: 15px;
    top: 12px;
    height: 25px;
    text-align: center;
    width: 25px
}

.faq_content4 .card-header a.collapsed:after {
    content: "\\f217";
    color: #fff
}

.faq_content4 .card-header a {
    display: block;
    font-weight: 600;
    padding: 15px 40px 15px 15px
}

.faq_content4 .card-body {
    padding: 10px 15px
}

.faq_content4 .card-header a,
.faq_content4 .card-body {
    color: #0e082c
}

.faq_content5 .card-header a::before {
    content: "Q.";
    font-weight: 600;
    margin-right: 5px
}

.faq_content5 .card {
    background-color: transparent;
    border: 0;
    border-radius: 0;
    margin-bottom: 20px
}

.faq_content5 .card-header a {
    background-color: #4a49bf;
    border-color: #fff;
    color: #fff;
    display: block;
    padding: 15px 40px 15px 15px;
    position: relative
}

.faq_content5 .card-body {
    background-color: #4141af;
    color: #fff;
    padding: 10px 20px;
    margin: 0 10px
}

.faq_content5 .card-header a.collapsed::after {
    content: "\\f104";
    color: #fff
}

.faq_content5 .card-header a::after {
    color: #fff;
    content: "\\f10d";
    font-family: ionicons;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    right: 15px;
    top: 14px
}

.faq_content5 .card-header a span::after {
    content: "";
    position: absolute;
    left: 0;
    top: 100%;
    border-style: solid;
    border-width: 0 10px 10px 0;
    border-color: transparent #4141af transparent transparent
}

.faq_content5 .card-header a span::before {
    content: "";
    position: absolute;
    right: 0;
    top: 100%;
    border-style: solid;
    border-width: 10px 10px 0 0;
    border-color: #4141af transparent transparent transparent
}

.faq_content5 .card-header ins {
    background-color: #4141af;
    top: 100%;
    height: 10px;
    position: absolute;
    left: 10px;
    right: 10px
}

.faq_content5 .collapse.show .card-body {
    margin-bottom: -10px
}

.tab_content .tab_nav_s5 {
    background-color: rgba(255, 255, 255, .2);
    display: table;
    border-radius: 40px;
    margin: 0 auto
}

.tab_content .tab_nav_s5 li {
    display: inline-block;
    padding: 5px
}

.tab_nav_s5 li a {
    border-radius: 40px;
    padding: 5px 15px;
    display: block;
    color: #fff;
    text-align: center
}

.tab_nav_s5 li a.active {
    background-color: #fff;
    color: #5957cd
}

.tab_content .tab_nav_s6 {
    border: 1px solid #fff;
    border-radius: 5px;
    display: table;
    margin: 0 auto
}

.tab_content .tab_nav_s6 li {
    display: inline-block;
    padding: 0
}

.tab_nav_s6 li a {
    border-radius: 5px;
    padding: 5px 15px;
    display: block;
    color: #fff;
    text-align: center
}

.tab_nav_s6 li a.active {
    background-color: #fff;
    color: #5957cd
}

.v_blue_pro .faq_content .card-header a.collapsed,
.v_blue_pro .faq_content .card-header a.collapsed::after,
.v_blue .faq_content .card-header a.collapsed,
.v_blue .faq_content .card-header a.collapsed::after,
.v_dark .faq_content .card-header a.collapsed,
.v_dark .faq_content .card-header a.collapsed::after {
    background-color: transparent;
    color: #fff
}

.v_blue_pro .faq_content .card-header a {
    background-color: #4a49bf;
    border-color: #fff;
    border-radius: 5px
}

.v_blue_pro .faq_content .card-body {
    background-color: #4a49bf
}

.v_blue_pro .faq_content .card::after,
.v_blue .faq_content .card::after,
.v_dark .faq_content .card::after {
    border: 1px solid #fff;
    border-radius: 5px;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1
}

.v_blue .faq_content .card-header a {
    background-color: #052d85;
    border-color: #fff;
    border-radius: 5px
}

.v_blue .faq_content .card-body {
    background-color: #052d85
}

.v_dark .faq_content .card-header a {
    background-color: #121833;
    border-color: #fff;
    border-radius: 5px
}

.v_dark .faq_content .card-body {
    background-color: #121833
}

.v_light_dark .tab-link {
    background-color: #262d4e
}

.v_light_dark .tab-link.active,
.v_light_dark .tab-link.active:hover,
.v_light_dark .tab-link:hover,
.v_royal_blue .tab-link.active,
.v_royal_blue .tab-link.active:hover,
.v_royal_blue .tab-link:hover {
    background-color: #ff68ca
}

.v_royal_blue .tab-link {
    background-color: #02126e
}

.v_navy_blue .faq_content2 .card {
    border: 1px solid #0043bb
}

.v_navy_blue .faq_content2 .card-header a.collapsed {
    background-color: transparent;
    color: #0043bb
}

.v_navy_blue .faq_content2 .card-header a.collapsed::after {
    color: #0043bb
}

.v_navy_blue .faq_content2 .card-header a,
.v_navy_blue .faq_content2 .card-body {
    background-color: #052d85;
    color: #fff
}

.v_navy_blue .nav-item a {
    color: #0043bb
}

.v_light_blue_pro .nav-item a:hover,
.v_light_blue_pro .nav-item a.active,
.v_navy_blue .nav-item a:hover,
.v_navy_blue .nav-item a.active {
    color: #ff67cb
}

.v_blue_pro .tab-link {
    background-color: #4141af
}

.v_blue_light .tab_nav_s5 li a.active {
    color: #0043bb
}

.v_blue .tab_nav_s6 li a.active {
    color: #052d85
}

.v_navy_blue .faq_question .card-header a::before {
    background-color: #0043bb
}

.v_navy_blue .faq_question .card-header a {
    border-bottom-color: #0043bb;
    color: #0043bb
}

.v_navy_blue .faq_question .card-body {
    border-color: #0043bb
}

.v_light_purple .tab_nav_s5 li a.active,
.v_light_purple .tab_nav_s6 li a.active {
    color: #6000b5
}

.v_cyan_blue .tab_nav_s2 li.nav-item {
    border-color: #193f88
}

.v_cyan_blue .tab_nav_s2 li a {
    color: #193f88
}

.v_cyan_blue .faq_question .card-header a::before {
    background-color: #193f88
}

.v_cyan_blue .faq_question .card-header a {
    border-color: #193f88;
    color: #193f88
}

.v_cyan_blue .faq_question .card-body {
    border-color: #193f88
}

.v_cyan_blue .faq_question .card-header a[aria-expanded=false] {
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent
}

.contact_section {
    overflow: hidden
}

.contact_box {
    padding: 100px 50px;
    height: 100%
}

.form_field .form-group {
    margin-bottom: 30px
}

.form_field input,
.form_field textarea {
    background-color: transparent;
    border-bottom: 1px solid #bdbcfb;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-radius: 0;
    color: #bdbcfb;
    padding: 10px 0
}

.form_field input:focus,
.form_field textarea:focus {
    background-color: transparent;
    border-bottom: 1px solid #bdbcfb;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    box-shadow: none;
    color: #bdbcfb;
    outline: 0
}

.form_field .form-control::-webkit-input-placeholder {
    color: #bdbcfb
}

.form_field .form-control:-moz-placeholder {
    color: #bdbcfb
}

.form_field .form-control::-moz-placeholder {
    color: #bdbcfb
}

.form_field .form-control:-ms-input-placeholder {
    color: #bdbcfb
}

.form_field textarea {
    resize: none
}

.form_field input[required=required] {
    box-shadow: none;
    outline: medium
}

.contact_detail {
    padding-left: 75px
}

.contact_info li {
    margin-bottom: 25px
}

.contact_info li:last-child {
    margin-bottom: 0
}

.contact_info li i {
    border: 1px solid #fff;
    border-radius: 100%;
    color: #fff;
    float: left;
    font-size: 26px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    width: 46px
}

.contct_follow span {
    color: #fff;
    font-weight: 500;
    margin-right: 20px
}

.contact_detail span {
    color: #fff;
    display: block;
    font-weight: 600;
    text-transform: uppercase
}

.contact_detail p {
    color: #fff;
    line-height: normal;
    margin: 0
}

.alert-msg-failure {
    color: red;
    margin-top: 10px
}

.alert-msg-success {
    color: #07ad00;
    margin-top: 10px
}

.info_contact {
    display: inline-block;
    width: 100%
}

.contact_info.info_contact li {
    float: left;
    width: 33.33%
}

.contact_info.info_contact li i {
    background-color: #5957cd;
    border: 0;
    display: inline-block;
    float: none;
    margin-bottom: 10px
}

.info_contact .contact_detail {
    padding: 0
}

.info_contact .contact_detail span,
.info_contact .contact_detail p {
    color: #7a7a7a
}

.field_form .form-control {
    border-color: #7a7a7a;
    border-radius: 5px;
    padding: 12px 15px
}

.contact_info.info_contact2 li i {
    border: 0;
    color: #0043bb;
    width: auto
}

.info_contact2 .contact_detail {
    padding-left: 40px
}

.contact_info.info_contact2 li span,
.contact_info.info_contact2 li p {
    color: #7a7a7a
}

.info_contact3 {
    display: inline-block;
    width: 100%
}

.info_contact3 li {
    margin-bottom: 30px
}

.info_contact3 li:last-child {
    margin-bottom: 0
}

.info_contact3 i {
    font-size: 20px;
    float: left;
    height: 30px;
    width: 30px;
    display: block;
    text-align: center;
    line-height: 30px
}

.info_contact3 .contact_detail {
    padding-left: 40px
}

.info_contact3 .contact_detail p {
    color: #7a7a7a
}

.contact_map {
    height: 308px;
    width: 100%;
    border: 4px solid #fff
}

.field_form_s2 .form-control {
    background-color: #e9eff2;
    border: 0;
    border-radius: 5px;
    color: #8e9294;
    font-size: 14px;
    padding: 14px 15px
}

.contact_box_s2 {
    padding: 30px 20px
}

.contact_title * {
    color: #fff
}

.contact_title h5 {
    font-weight: 600;
    margin-bottom: 20px
}

.contact_box_s2 .contact_info li {
    margin-bottom: 15px
}

.contact_box_s3 {
    padding: 30px
}

.contact_box_s3 i {
    font-size: 26px;
    color: #fff;
    border: 1px solid #fff;
    display: inline-block;
    border-radius: 100%;
    height: 40px;
    width: 40px;
    line-height: 40px;
    margin-bottom: 15px
}

.contact_box_s3 h5 {
    color: #fff;
    font-weight: 700;
    text-transform: uppercase
}

.contact_box_s3 p {
    color: #fff;
    margin: 15px 0;
    display: inline-block;
    width: 100%
}

.contact_box_s3 a {
    color: #fff;
    font-weight: 700;
    text-transform: uppercase
}

.contact_box_s3 i.ion-paper-airplane {
    padding: 1px 4px 0 0
}

.contact_map2 {
    height: 100%
}

.contact_info_box {
    padding: 40px 30px
}

.half-info li {
    float: left;
    width: 50%;
    margin-bottom: 0;
    margin-top: 20px
}

.half-info li:nth-child(2n+1) {
    clear: both
}

.half-info.info_contact3 i {
    line-height: normal
}

.v_blue_pro .form_field .form-control::-webkit-input-placeholder {
    color: #fff
}

.v_blue_pro .form_field .form-control:-moz-placeholder {
    color: #fff
}

.v_blue_pro .form_field .form-control::-moz-placeholder {
    color: #fff
}

.v_blue_pro .form_field .form-control:-ms-input-placeholder {
    color: #fff
}

.v_blue_light .contact_info.info_contact li i {
    background-color: #0043bb
}

.v_blue .info_contact .contact_detail span,
.v_blue .info_contact .contact_detail p {
    color: #fff
}

.v_blue .field_form .form-control,
.v_dark .field_form .form-control,
.v_royal_blue .field_form .form-control {
    background-color: transparent;
    border-color: #fff;
    color: #fff
}

.v_blue .form-control::-webkit-input-placeholder {
    color: #fff
}

.v_blue .form-control:-moz-placeholder {
    color: #fff
}

.v_blue .form-control::-moz-placeholder {
    color: #fff
}

.v_blue .form-control:-ms-input-placeholder {
    color: #fff
}

.v_dark .form-control::-webkit-input-placeholder {
    color: #fff
}

.v_dark .form-control:-moz-placeholder {
    color: #fff
}

.v_dark .form-control::-moz-placeholder {
    color: #fff
}

.v_dark .form-control:-ms-input-placeholder {
    color: #fff
}

.v_royal_blue .form-control::-webkit-input-placeholder {
    color: #fff
}

.v_royal_blue .form-control:-moz-placeholder {
    color: #fff
}

.v_royal_blue .form-control::-moz-placeholder {
    color: #fff
}

.v_royal_blue .form-control:-ms-input-placeholder {
    color: #fff
}

.v_dark .social_icon li a,
.v_light_dark .social_icon li a {
    color: #0c0e27
}

.v_navy_blue .social_icon li a {
    color: #052d85
}

.v_dark .social_icon li a:hover {
    color: #ff69c9
}

.v_dark .form_field .form-control::-webkit-input-placeholder {
    color: #fff
}

.v_dark .form_field .form-control:-moz-placeholder {
    color: #fff
}

.v_dark .form_field .form-control::-moz-placeholder {
    color: #fff
}

.v_dark .form_field .form-control:-ms-input-placeholder {
    color: #fff
}

.v_light_dark .form_field .form-control::-webkit-input-placeholder {
    color: #fff
}

.v_light_dark .form_field .form-control:-moz-placeholder {
    color: #fff
}

.v_light_dark .form_field .form-control::-moz-placeholder {
    color: #fff
}

.v_light_dark .form_field .form-control:-ms-input-placeholder {
    color: #fff
}

.v_royal_blue .form_field .form-control::-webkit-input-placeholder {
    color: #fff
}

.v_royal_blue .form_field .form-control:-moz-placeholder {
    color: #fff
}

.v_royal_blue .form_field .form-control::-moz-placeholder {
    color: #fff
}

.v_royal_blue .form_field .form-control:-ms-input-placeholder {
    color: #fff
}

.v_navy_blue .form_field .form-control::-webkit-input-placeholder {
    color: #fff
}

.v_navy_blue .form_field .form-control:-moz-placeholder {
    color: #fff
}

.v_navy_blue .form_field .form-control::-moz-placeholder {
    color: #fff
}

.v_navy_blue .form_field .form-control:-ms-input-placeholder {
    color: #fff
}

.v_blue_pro .form_field input,
.v_blue_pro .form_field textarea,
.v_dark .form_field input,
.v_dark .form_field textarea,
.v_light_dark .form_field input,
.v_light_dark .form_field textarea,
.v_royal_blue .form_field input,
.v_royal_blue .form_field textarea,
.v_navy_blue .form_field input,
.v_navy_blue .form_field textarea {
    border-color: #fff;
    color: #fff
}

.v_light_purple .contact_info.info_contact li i {
    background-color: #6441a5
}

.v_cyan_blue .info_contact3 i {
    color: #193f88
}

.client_logo_border {
    border: 1px solid #5957cd;
    padding: 10px;
    margin-top: 20px
}

.logo_border {
    height: 120px
}

.logo_border::before {
    background-color: #e6e8ea;
    bottom: 0;
    content: "";
    height: 1px;
    left: 0;
    margin-bottom: -1px;
    position: absolute;
    width: 100%
}

.logo_border::after {
    background-color: #e6e8ea;
    content: "";
    height: 100%;
    margin-right: -1px;
    position: absolute;
    right: 0;
    top: 0;
    width: 1px
}

.partner_logo {
    padding: 35px 40px;
    margin-bottom: -60px
}

.v_blue_pro .logo_border::after,
.v_blue_pro .logo_border::before,
.v_blue_light .logo_border::after,
.v_blue_light .logo_border::before,
.v_blue .logo_border::after,
.v_blue .logo_border::before,
.v_dark .logo_border::after,
.v_dark .logo_border::before,
.v_royal_blue .logo_border::after,
.v_royal_blue .logo_border::before {
    background-color: rgba(255, 255, 255, .2)
}

.top_footer {
    position: relative
}

.top_footer {
    padding: 100px 0
}

.footer_title {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
    position: relative;
    text-transform: uppercase
}

.footer_title_s2 {
    font-size: 18px;
    color: #fff;
    text-transform: uppercase;
    margin: 15px 0
}

.footer_title.border_title {
    padding-left: 40px
}

.footer_title.border_title::before {
    background-color: #fff;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: 12px;
    width: 30px
}

.footer_desc p {
    color: #fff;
    margin: 0
}

.company_info p {
    margin-bottom: 15px
}

.newsletter_form form {
    position: relative
}

.newsletter_form p {
    color: #fff
}

.newsletter_form input {
    background-color: #fff;
    color: #7a7a7a
}

.newsletter_form input:focus {
    outline: none
}

.newslattter_section {
    border-radius: 5px;
    padding: 40px
}

.newsletter_form .input_outline_white {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    padding-right: 160px
}

.newsletter_form_s2 .input_outline_white {
    padding-right: 50px;
    height: 46px
}

.newsletter_form .btn_icon {
    padding: 0;
    height: 35px;
    width: 35px;
    line-height: 35px;
    text-align: center
}

.newsletter_form .input_outline_white::-webkit-input-placeholder {
    color: #fff;
    opacity: 1
}

.newsletter_form .input_outline_white:-moz-placeholder {
    color: #fff;
    opacity: 1
}

.newsletter_form .input_outline_white::-moz-placeholder {
    color: #fff;
    opacity: 1
}

.newsletter_form .input_outline_white:-ms-input-placeholder {
    color: #fff;
    opacity: 1
}

button.radius_btn {
    border-radius: 5px
}

.newsletter_form button.radius_btn {
    padding: 5px 35px;
    right: 5px;
    top: 7px
}

.chat_title {
    font-size: 20px;
    color: #fff
}

button.btn-white:hover {
    background-color: rgba(255, 255, 255, .55)
}

.input-rounded {
    border-radius: 50px
}

.newsletter_form button {
    padding: 7px 40px;
    position: absolute;
    right: 5px;
    top: 5px
}

.newslattter_small {
    margin: 0 auto;
    max-width: 490px
}

.bottom_footer {
    background-color: #4b49c5;
    padding: 20px 0
}

.footer_bottom {
    border-top: 1px solid #fff;
    padding: 20px 0
}

.copyright {
    color: #fff;
    font-size: 14px;
    margin: 0
}

.footer_menu {
    text-align: right
}

.footer_menu li {
    display: inline-block;
    margin-left: 10px
}

.footer_menu li:first-child {
    margin-left: 0
}

.footer_menu li a,
.footer_link a {
    color: #fff;
    font-size: 14px
}

.footer_menu li a:hover,
.footer_link a:hover,
.footer_social li a:hover {
    color: #ff69c9
}

.footer_link.list_arrow li {
    list-style: none
}

.footer_link.list_arrow li a::before {
    content: "\\f125";
    font-family: ionicons;
    font-size: 14px;
    margin-right: 10px
}

.half_link li {
    float: left;
    width: 50%
}

.half_link li:nth-child(2n) {
    padding-left: 30px
}

.footer_social li a {
    color: #fff;
    font-size: 14px;
    text-transform: capitalize
}

.footer_social li a i {
    display: inline-block;
    font-size: 16px;
    margin-right: 5px;
    text-align: center;
    width: 15px
}

.footer_social_s2 {
    margin-top: 30px
}

.footer_link_s2 li {
    display: inline-block;
    list-style: outside none none;
    padding: 0 10px
}

.footer_link_s2 li a {
    color: #fff;
    font-size: 14px
}

.footer_link_s2 li a:hover {
    color: #ff69c9
}

.footer_pattern {
    background-image: url(../images/footer_pattern.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}

.newsletter_form.newsletter_form_s3 input {
    border-radius: 5px;
    padding: 8px 10px;
    margin-bottom: 10px
}

.newsletter_form_s3 button {
    border-radius: 5px;
    right: 0;
    top: 0
}

.v_blue_pro .bottom_footer {
    background-color: #4241b8
}

.v_blue .bottom_footer {
    background-color: #052d85
}

.v_dark .bottom_footer,
.v_light_dark .bottom_footer {
    background-color: #0c0e27
}

.v_blue_light .btn-info,
.v_royal_blue .btn-info {
    background-color: #193dc0
}

.v_blue_light .btn-info:hover,
.v_blue_light .btn-info.active,
.v_blue_light .btn-info:focus,
.v_blue_light .btn-info.active:not(:disabled):not(.disabled),
.v_blue_light .btn-info:active:not(:disabled):not(.disabled),
.v_blue_light .btn-info.active:focus:not(:disabled):not(.disabled),
.v_blue_light .btn-info:active:focus:not(:disabled):not(.disabled),
.v_royal_blue .btn-info:hover,
.v_royal_blue .btn-info.active,
.v_royal_blue .btn-info:focus,
.v_royal_blue .btn-info.active:not(:disabled):not(.disabled),
.v_royal_blue .btn-info:active:not(:disabled):not(.disabled),
.v_royal_blue .btn-info.active:focus:not(:disabled):not(.disabled),
.v_royal_blue .btn-info:active:focus:not(:disabled):not(.disabled) {
    background-color: #071890
}

.v_blue_light .social_icon li a {
    color: #193dc0
}

.v_blue_light .social_icon li a:hover {
    color: #ff69c9
}

.v_blue_light .bottom_footer {
    background-color: #071890
}

.v_royal_blue .social_icon li a i {
    background-color: #193dc0
}

.v_royal_blue .social_icon li a {
    color: #fff
}

.v_royal_blue .social_icon li a:hover {
    color: #ff69c9
}

.v_royal_blue .bottom_footer {
    background-color: #193dc0
}

.v_light_purple .social_icon li a {
    color: #6000b5
}

.v_cyan_blue .social_icon li a {
    color: #fff
}

.section_breadcrumb {
    padding: 200px 0 100px
}

.breadcrumb li a,
.breadcrumb li span {
    color: #fff;
    text-transform: capitalize
}

.breadcrumb li a:hover {
    color: #ff69c9
}

.breadcrumb li::before {
    color: #fff;
    content: "/";
    margin: 5px
}

.breadcrumb li:first-child:before {
    content: normal
}

.counter_wrap.overlay::before {
    background-color: rgba(89, 87, 205, .9);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0
}

.counter_bg {
    background-image: url(../images/counter_bg.jpg)
}

.box_counter i,
.box_counter .counter,
.box_counter p {
    color: #fff
}

.box_counter i {
    font-size: 60px
}

.box_counter .counter {
    font-size: 40px;
    font-weight: 600;
    margin-top: 20px
}

.box_counter p {
    margin: 0
}

.testimonial_wrap {
    background-color: #f7f7f7;
    display: inline-block;
    padding: 20px;
    width: 100%
}

.testimonial_wrap img {
    float: left;
    height: 146px;
    margin-right: 20px;
    max-width: 146px
}

.rounded_img img {
    border-radius: 100%
}

.testimonial_wrap h5 {
    color: #333;
    margin: 0
}

.testimonial_wrap span {
    color: #333;
    font-size: 14px;
    margin-bottom: 10px
}

.testimonial_wrap p {
    font-size: 14px;
    margin: 0;
    overflow: hidden
}

.action-content h3 {
    color: #fff;
    font-size: 26px
}

.action-content p {
    color: #fff
}

.rounded_border_icon::before {
    background-color: rgba(89, 87, 205, .5);
    border-radius: 100%;
    bottom: 0;
    content: "";
    left: 0;
    margin: -5px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1
}

.rounded_border_icon::after {
    background-color: rgba(89, 87, 205, .5);
    border-radius: 100%;
    bottom: 0;
    content: "";
    left: 0;
    margin: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all .8s ease 0s;
    z-index: -1
}

.box_wrap:hover .rounded_border_icon::after {
    margin: -20px;
    opacity: 0
}

.rounded_border_icon {
    border-radius: 100%;
    display: inline-block;
    padding: 15px;
    position: relative
}

.video.play_btn {
    background-color: #5957cd;
    border: 4px solid #fff;
    border-radius: 100%;
    height: 74px;
    left: 50%;
    padding: 22px 0 22px 5px;
    position: absolute;
    top: 50%;
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    vertical-align: middle;
    width: 74px
}

.play_btn::before {
    -webkit-animation: rounded 2.5s infinite;
    -moz-animation: rounded 2.5s infinite;
    -o-animation: rounded 2.5s infinite;
    -ms-transition: rounded 2.5s infinite;
    animation: rounded 2.5s infinite;
    border: 2px solid #fff;
    border-radius: 100%;
    bottom: -10px;
    content: "";
    display: block;
    left: -10px;
    opacity: 0;
    position: absolute;
    right: -10px;
    top: -10px;
    z-index: -1
}

.play_btn::before {
    animation-delay: .8s
}

@keyframes rounded {
    0% {
        opacity: 0;
        -moz-transform: scale(.8);
        -webkit-transform: scale(.8);
        transform: scale(.8)
    }

    50% {
        opacity: 1
    }

    100% {
        opacity: 0;
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2)
    }
}

.play_icon {
    border-color: transparent transparent transparent #fff;
    border-style: solid;
    border-width: 10px 0 10px 15px;
    display: block;
    height: 0;
    margin: 0 auto;
    width: 0
}

.pricing_box {
    box-shadow: 0 5px 30px rgba(0, 0, 0, .1)
}

.pr_title h3,
.pr_title span {
    color: #fff
}

.pr_title h3 {
    font-size: 26px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0
}

.pr_title>h3 {
    background-color: rgba(0, 0, 0, .3);
    padding: 25px
}

.price_tage {
    padding: 25px
}

.pr_content li {
    padding: 10px;
    line-height: normal
}

.pr_footer {
    padding: 10px 10px 30px
}

.not_found {
    margin: 0 auto;
    max-width: 450px
}

.not_found h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    text-transform: uppercase
}

.blog_content {
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    display: inline-block;
    width: 100%
}

.blog_text {
    padding: 15px
}

.blog_title {
    font-weight: 600
}

.blog_title a {
    color: #444
}

.blog_text a {
    font-weight: 600;
    line-height: normal
}

.blog_title a:hover,
.blog_meta a:hover,
.blog_meta a:hover i,
.blog_content_detail .blog_meta a:hover,
.blog_content_detail .blog_meta a:hover span,
.blog_content_detail .blog_meta a:hover i,
.widget-post-content h6 a:hover {
    color: #ff69c9
}

.blog_item {
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    margin-top: 20px
}

.blog_meta li {
    display: inline-block;
    padding-right: 15px
}

.blog_meta li:last-child {
    padding: 0;
    float: right
}

.blog_content p {
    height: 85px;
    margin: 0 0 10px;
    overflow: hidden
}

.blog_meta a {
    color: #444
}

.blog_meta li a i {
    color: #5957cd;
    font-size: 18px;
    vertical-align: middle;
    transition: all .5s ease 0s
}

.blog_img {
    border-radius: 10px 10px 0 0;
    overflow: hidden
}

.blog_img img {
    zoom: 1;
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    transition: all .5s ease 0s;
    width: 100%
}

.blog_item:hover img {
    zoom: 1.1;
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1)
}

.blog_meta {
    background-color: #f1f1f1;
    border-radius: 0 0 10px 10px;
    display: block;
    padding: 10px 15px;
    width: 100%
}

.owl-theme .owl-dots .owl-dot span {
    background-color: #5957cd;
    height: 13px;
    margin: 3px;
    width: 13px
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
    background-color: #5957cd
}

.owl-theme .owl-dots .owl-dot.active span {
    background-color: transparent;
    border: 2px solid #5957cd
}

.owl-theme .owl-nav.disabled+.owl-dots {
    margin-top: 30px
}

.v_blue_pro .blog_content {
    background-color: #5957cd
}

.v_blue_pro .blog_item {
    border-color: #4241b8;
    box-shadow: none
}

.v_blue_pro .blog_meta {
    background-color: #4a49bf
}

.v_blue_pro .blog_title a,
.v_blue_pro .blog_text p,
.v_blue_pro .blog_text a,
.v_blue_pro .blog_meta a,
.v_blue_pro .blog_meta a i,
.v_dark .blog_title a,
.v_dark .blog_text p,
.v_dark .blog_meta a {
    color: #fff
}

.v_blue_pro .blog_title a:hover,
.v_blue_pro .blog_text a:hover,
.v_blue_pro .blog_meta a:hover,
.v_blue_pro .blog_meta a:hover i,
.v_dark .blog_title a:hover,
.v_dark .blog_text a:hover,
.v_dark .blog_meta a:hover,
.v_dark .blog_meta a:hover i {
    color: #ff69c9
}

.v_dark .blog_item {
    border-color: #fff
}

.v_dark .blog_meta {
    background-color: #121833
}

.v_dark .blog_content {
    background-color: #0c0e27
}

.v_dark .blog_text>a,
.v_dark .blog_meta a i {
    color: #ffcc67
}

.v_dark .owl-theme .owl-dots .owl-dot span,
.v_dark .owl-theme .owl-dots .owl-dot.active span,
.v_dark .owl-theme .owl-dots .owl-dot:hover span,
.v_blue_pro .owl-theme .owl-dots .owl-dot span,
.v_blue_pro .owl-theme .owl-dots .owl-dot.active span,
.v_blue_pro .owl-theme .owl-dots .owl-dot:hover span {
    background-color: #fff
}

.v_dark .owl-theme .owl-dots .owl-dot.active span,
.v_blue_pro .owl-theme .owl-dots .owl-dot.active span {
    background-color: transparent;
    border-color: #fff
}

.authorize_box {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, .1);
    margin: 0 auto;
    max-width: 495px;
    padding: 45px 50px
}

.authorize_box .form-group {
    margin-bottom: 30px
}

.forgot_pass {
    color: #7a7a7a
}

.authorize_form .form-group:last-child {
    margin: 0
}

.checkbox_field input {
    display: none;
    width: auto
}

.checkbox_field label {
    padding-left: 20px;
    cursor: pointer;
    margin: 0;
    position: relative
}

.checkbox_field label::before {
    content: "\\f372";
    font-family: ionicons;
    font-size: 18px;
    left: 0;
    line-height: normal;
    position: absolute;
    top: 5px
}

.checkbox_field input:checked+label::before {
    content: "\\f373"
}

.form_search {
    position: relative
}

.form_search input {
    border: 1px solid #7a7a7a;
    border-radius: 40px;
    padding-right: 45px
}

.form_search input::-webkit-input-placeholder {
    opacity: 1
}

.form_search input:-moz-placeholder {
    opacity: 1
}

.form_search input::-moz-placeholder {
    opacity: 1
}

.form_search input:-ms-input-placeholder {
    opacity: 1
}

.form_search button {
    background: transparent none repeat scroll 0 0;
    border-radius: 0;
    color: #7a7a7a;
    font-size: 30px;
    padding: 0;
    position: absolute;
    right: 20px;
    top: 10px
}

.widget {
    margin-bottom: 40px
}

.widget:last-child {
    margin: 0
}

.widget_title {
    color: #444;
    font-size: 22px;
    padding-bottom: 10px
}

.widget_category li,
.widget_archive li {
    margin-bottom: 5px
}

.widget_category li a,
.widget_archive li a {
    color: #7a7a7a;
    display: block;
    padding-left: 15px;
    position: relative
}

.widget_category li a:hover,
.widget_archive li a:hover {
    color: #ff69c9
}

.widget_category li a::before,
.widget_archive li a:before {
    content: "\\f3d3";
    font-family: ionicons;
    left: 0;
    position: absolute;
    top: 0
}

.widget-post-thumb {
    float: left
}

.widget-post-thumb img {
    max-width: 100px
}

.widget-post-content h6 {
    font-weight: 600;
    line-height: normal;
    margin-top: -5px
}

.widget-post-content h6 a {
    color: #444
}

.widget-post-content {
    overflow: hidden;
    padding-left: 10px
}

.widget-post {
    border-bottom: 1px solid #7a7a7a;
    display: inline-block;
    margin-bottom: 15px;
    padding-bottom: 15px;
    width: 100%
}

.widget-post:last-child {
    margin: 0
}

.widget-date i {
    font-size: 18px;
    vertical-align: middle
}

.widget-date {
    line-height: normal
}

.tags li {
    display: inline-block
}

.tags li a {
    border: 1px solid #7a7a7a;
    border-radius: 40px;
    color: #7a7a7a;
    display: block;
    margin-top: 10px;
    padding: 4px 18px;
    text-transform: capitalize
}

.tags li a:hover {
    border-color: #ff69c9;
    color: #ff69c9
}

.widget_archive li a span,
.widget_category li a span {
    float: right
}

.post-details article {
    border-bottom: 1px solid #7a7a7a;
    margin-bottom: 50px;
    padding-bottom: 50px
}

.blog_content_detail .blog_title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px
}

.blog_content_detail .blog_meta {
    background-color: transparent;
    padding: 0
}

.blog_content_detail .blog_meta a {
    color: #7a7a7a;
    font-size: 14px
}

.blog_content_detail .blog_meta li:last-child {
    float: none
}

.blog_content_detail .blog_meta li a i {
    color: #7a7a7a
}

.blog_content_detail .blog_meta a span {
    color: #5957cd;
    transition: all .5s ease 0s
}

.post_content p {
    margin-bottom: 10px
}

.action_block {
    margin-top: 20px
}

.action_block a,
.action_block ul {
    display: inline-block;
    vertical-align: middle
}

.social-share {
    margin-left: 15px
}

.social-share li {
    float: left;
    margin-right: 5px
}

.social-share li a {
    border: 1px solid #7a7a7a;
    border-radius: 100%;
    color: #7a7a7a;
    display: block;
    font-size: 18px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 30px
}

.social-share li a:hover {
    background-color: #5957cd;
    border-color: #5957cd;
    color: #fff
}

.pagination li {
    margin-right: 5px
}

.pagination li a {
    background-color: #eee;
    border-radius: 5px;
    color: #7a7a7a;
    display: block;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    padding: 7px 20px;
    text-transform: uppercase
}

.pagination li.active a,
.pagination li a:hover {
    background-color: #5957cd;
    color: #fff
}

.comment_info {
    border-bottom: 1px solid #cdcdcd;
    margin-bottom: 25px;
    padding-bottom: 25px
}

.comment_list {
    margin-bottom: 50px
}

.comment_info:last-child {
    margin-bottom: 0
}

.comment_reply {
    background-color: #f7f7f7;
    margin-left: 50px;
    margin-top: 25px;
    padding: 20px
}

.comment-area {
    margin-top: 30px
}

.comment-title {
    margin-bottom: 30px
}

.comment-title h6 {
    color: #000;
    font-weight: 600;
    text-transform: uppercase
}

.user_img img {
    border: 5px solid #e2dede;
    border-radius: 100%;
    height: 92px;
    max-width: 92px
}

.comment_content {
    padding-left: 20px
}

.meta_data a {
    color: #444;
    font-weight: 700
}

.comment-time {
    font-size: 14px;
    line-height: normal;
    margin-bottom: 8px
}

.comment-reply {
    color: #444
}

.comment-reply i {
    font-size: 26px;
    margin-right: 5px;
    vertical-align: middle
}

.comment_content p {
    margin: 0
}

.comment_form .form-group {
    margin-bottom: 30px
}

.map iframe {
    border: 0;
    display: block
}

.list_icon {
    background-color: #5957cd;
    border-radius: 100%;
    display: inline-block;
    height: 50px;
    line-height: 53px;
    text-align: center;
    vertical-align: middle;
    width: 50px
}

.list_icon i {
    color: #fff;
    font-size: 20px
}

.list_info_half {
    margin: 0 -10px
}

.list_info_half li {
    float: left;
    width: 50%;
    margin-bottom: 15px;
    padding: 0 10px
}

.list_content {
    padding-left: 5px;
    vertical-align: middle;
    width: calc(100% - 55px);
    width: -moz-calc(100% - 55px);
    width: -webkit-calc(100% - 55px);
    display: inline-block
}

.list_content h6 {
    font-weight: 600
}

.list_content h6,
.list_content p {
    color: #fff
}

.list_content p {
    font-size: 14px
}

.list_info li:last-child .list_content p {
    margin-bottom: 0
}

.list_icon .fa-mobile {
    font-size: 30px;
    line-height: 50px
}

.list_info li {
    position: relative
}

.border_line li::before {
    background-color: #081990;
    content: "";
    height: 100%;
    left: 31px;
    position: absolute;
    top: 0;
    width: 1px;
    z-index: -1
}

.border_line li:last-child::before {
    content: none
}

.v_blue_light .list_icon {
    background-color: #081990
}

.v_light_dark .list_icon {
    background-color: #121833
}

.v_light_dark .list_content h6 {
    color: #121833
}

.v_light_dark .list_content p {
    color: #7a7a7a
}

.dl_lan {
    margin: 0 -5px
}

.dl_lan li {
    float: left;
    padding: 0 5px;
    width: 25%
}

.dl_lan li a {
    background-color: #071890;
    border-bottom: 2px solid #ffcc67;
    color: #fff;
    display: block;
    font-size: 15px;
    padding: 10px 15px;
    text-align: center
}

.dl_lan img,
.dl_lan span {
    margin-right: 8px
}

.dl_lan li a:hover {
    border-color: #ff69c9
}

.wp_pattern {
    background-image: url(../images/whitepaper_pattern.png);
    background-position: center bottom;
    background-repeat: repeat-x;
    background-size: contain
}

.doc_box {
    margin-bottom: 15px
}

.doc_dropdown {
    z-index: 2
}

.doc_dropdown>a,
.doc_dropdown>a:hover {
    background-image: -webkit-linear-gradient(left, #6441a5 0%, #2a0845 99%);
    background-image: linear-gradient(to right, #6441a5 0%, #2a0845 99%);
    border-radius: 5px;
    color: #280e3b;
    padding: 12px 20px;
    position: relative;
    text-transform: uppercase;
    text-align: left;
    vertical-align: middle;
    z-index: 2
}

.doc_dropdown a::before {
    background-color: #f8f8ff;
    border-radius: 5px;
    bottom: 0;
    content: "";
    left: 0;
    margin: 2px;
    position: absolute;
    right: 0;
    top: 0;
    transition: all .5s ease 0s;
    z-index: -1
}

.doc_dropdown .dropdown-toggle::after {
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 20px
}

.doc_dropdown .dropdown-menu {
    background-image: -webkit-linear-gradient(left, #6441a5 0%, #2a0845 99%);
    background-image: linear-gradient(to right, #6441a5 0%, #2a0845 99%);
    border: 0;
    right: 0;
    padding: 10px 15px
}

.doc_dropdown .dropdown-menu li a {
    display: block;
    color: #2a0845;
    text-transform: capitalize
}

.doc_dropdown .dropdown-menu li a:hover {
    color: #00fdfa
}

.doc_dropdown .dropdown-menu li a i {
    float: right;
    margin-top: 6px
}

.doc_lan {
    margin: 0 -7px
}

.doc_lan li {
    float: left;
    padding: 0 7px
}

.doc_lan li a {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .09);
    color: #7a7a7a;
    display: block;
    padding: 15px 15px 10px
}

.doc_lan li a:hover,
.doc_lan li a:hover span i {
    color: #ff69c9
}

.doc_lan li a span {
    display: block;
    margin-top: 5px
}

.doc_lan li a span i {
    color: #280e3b;
    font-size: 24px;
    margin-left: 10px;
    vertical-align: middle;
    transition: all .5s ease
}

.document_wrap {
    margin-bottom: 20px
}

.document_wrap label,
.document_dropdown {
    display: inline-block
}

.document_dropdown {
    margin-left: 10px;
    position: relative
}

.document_dropdown .divider {
    display: none
}

.document_dropdown .arrow::before {
    color: #7a7a7a;
    right: 15px;
    top: 5px
}

.document_dropdown #doc_select_msdd {
    border: 1px solid #7a7a7a;
    color: #7a7a7a;
    cursor: pointer;
    padding: 3px 15px;
    border-radius: 40px;
    width: 240px !important;
    display: block
}

#doc_select_child {
    background-color: #fff;
    border-color: #7a7a7a !important;
    width: 100%;
    left: 0;
    right: 0;
    margin-top: 10px
}

#doc_select_child ul li {
    list-style: none
}

#doc_select_child ul li span {
    display: block;
    padding: 5px 10px;
    transition: all .3s ease-in-out
}

#doc_select_child ul li span:hover {
    padding-left: 15px
}

.token_rtinfo {
    border-radius: 10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .2);
    margin-top: -80px;
    padding: 40px 15px
}

.token_rt_value {
    padding: 0 25px
}

.token_rt_value h3 {
    color: #0c0e27;
    font-weight: 700;
    margin: 0
}

.token_rt_value h3 span {
    font-size: 18px
}

.token_rt_value p {
    color: #0c0e27;
    margin: 0
}

.border_right div[class*=col-] {
    border-left: 1px solid #ccc
}

.border_right div[class*=col-]:first-child {
    border-left: 0
}

.token_rt_value.token_value_white * {
    color: #fff
}

.review_icon {
    float: left;
    margin-right: 20px
}

.review_icon i {
    color: #fff;
    font-size: 40px
}

.rate_title {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin: 0
}

.review_info {
    overflow: hidden
}

.review_info h6 {
    color: #fff;
    font-weight: 400
}

.rating {
    color: #25cc9c;
    font-size: 20px;
    font-weight: 700
}

.rating small {
    font-size: 16px;
    font-weight: 400
}

.spop {
    width: 100%
}

.notification_inner {
    padding-left: 10px;
    padding-right: 10px
}

.notification_inner h3 {
    font-size: 18px;
    margin-bottom: 10px
}

.notification_inner h3,
.notification_inner p {
    color: #fff
}

.spop .spop-close {
    right: 6px;
    top: 10px
}

.notification_inner img {
    border-radius: 100%;
    display: inline-block;
    height: 20px;
    width: 20px
}

`
