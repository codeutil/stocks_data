const returns = [
  { year: 1928, value: 37.9 },
  { year: 1929, value: -11.9 },
  { year: 1930, value: -28.5 },
  { year: 1931, value: -47.1 },
  { year: 1932, value: -15.2 },
  { year: 1933, value: 46.6 },
  { year: 1934, value: -5.9 },
  { year: 1935, value: 41.4 },
  { year: 1936, value: 27.9 },
  { year: 1937, value: -38.6 },
  { year: 1938, value: 25.2 },
  { year: 1939, value: -5.4 },
  { year: 1940, value: -15.3 },
  { year: 1941, value: -17.9 },
  { year: 1942, value: 12.4 },
  { year: 1943, value: 19.4 },
  { year: 1944, value: 13.8 },
  { year: 1945, value: 30.7 },
  { year: 1946, value: -11.9 },
  { year: 1947, value: 0.0 },
  { year: 1948, value: -0.7 },
  { year: 1949, value: 10.3 },
  { year: 1950, value: 21.8 },
  { year: 1951, value: 16.5 },
  { year: 1952, value: 11.8 },
  { year: 1953, value: -6.6 },
  { year: 1954, value: 45.0 },
  { year: 1955, value: 26.4 },
  { year: 1956, value: 2.6 },
  { year: 1957, value: -14.3 },
  { year: 1958, value: 38.1 },
  { year: 1959, value: 8.5 },
  { year: 1960, value: -3.0 },
  { year: 1961, value: 23.1 },
  { year: 1962, value: -11.8 },
  { year: 1963, value: 18.9 },
  { year: 1964, value: 12.9 },
  { year: 1965, value: 9.1 },
  { year: 1966, value: -13.1 },
  { year: 1967, value: 20.1 },
  { year: 1968, value: 7.7 },
  { year: 1969, value: -11.4 },
  { year: 1970, value: 0.1 },
  { year: 1971, value: 10.8 },
  { year: 1972, value: 15.6 },
  { year: 1973, value: -17.4 },
  { year: 1974, value: -29.7 },
  { year: 1975, value: 31.5 },
  { year: 1976, value: 19.1 },
  { year: 1977, value: -11.5 },
  { year: 1978, value: 1.1 },
  { year: 1979, value: 12.3 },
  { year: 1980, value: 25.8 },
  { year: 1981, value: -9.7 },
  { year: 1982, value: 14.8 },
  { year: 1983, value: 17.3 },
  { year: 1984, value: 1.4 },
  { year: 1985, value: 26.3 },
  { year: 1986, value: 14.6 },
  { year: 1987, value: 2.0 },
  { year: 1988, value: 12.4 },
  { year: 1989, value: 27.3 },
  { year: 1990, value: -6.6 },
  { year: 1991, value: 26.3 },
  { year: 1992, value: 4.5 },
  { year: 1993, value: 7.1 },
  { year: 1994, value: -1.5 },
  { year: 1995, value: 34.1 },
  { year: 1996, value: 20.3 },
  { year: 1997, value: 31.0 },
  { year: 1998, value: 26.7 },
  { year: 1999, value: 19.5 },
  { year: 2000, value: -10.1 },
  { year: 2001, value: -13.0 },
  { year: 2002, value: -23.4 },
  { year: 2003, value: 26.4 },
  { year: 2004, value: 8.0 },
  { year: 2005, value: 3.0 },
  { year: 2006, value: 13.6 },
  { year: 2007, value: 3.5 },
  { year: 2008, value: -38.5 },
  { year: 2009, value: 23.5 },
  { year: 2010, value: 12.8 },
  { year: 2011, value: 0.0 },
  { year: 2012, value: 13.4 },
  { year: 2013, value: 29.6 },
  { year: 2014, value: 11.4 },
  { year: 2015, value: -0.7 },
  { year: 2016, value: 9.5 },
  { year: 2017, value: 19.4 },
  { year: 2018, value: -6.2 },
  { year: 2019, value: 28.9 },
  { year: 2020, value: 16.3 },
  { year: 2021, value: 26.9 },
  { year: 2022, value: -19.4 },
  { year: 2023, value: 24.2 },
  { year: 2024, value: 23.3 },
  { year: 2025, value: 23.3 },
];

const valuations = {
  pe: {
    average: 16.22,
    current: 32.67,
    historyStart: 1871,
    higherCount: 4,
    sampleCount: 156,
  },
  pb: {
    average: 3.16,
    current: 6.02,
    historyStart: 1999,
    higherCount: 0,
    sampleCount: 28,
  },
  updated: "May 29, 2026",
};

valuations.pe.percentile = percentileFromRank(valuations.pe);
valuations.pb.percentile = percentileFromRank(valuations.pb);

const valuationSeries = {
  pb: [
    { year: 1999, value: 5.05 },
    { year: 2000, value: 4.05 },
    { year: 2001, value: 3.39 },
    { year: 2002, value: 2.73 },
    { year: 2003, value: 3.03 },
    { year: 2004, value: 2.92 },
    { year: 2005, value: 2.76 },
    { year: 2006, value: 2.81 },
    { year: 2007, value: 2.77 },
    { year: 2008, value: 2.00 },
    { year: 2009, value: 2.17 },
    { year: 2010, value: 2.17 },
    { year: 2011, value: 2.05 },
    { year: 2012, value: 2.14 },
    { year: 2013, value: 2.58 },
    { year: 2014, value: 2.83 },
    { year: 2015, value: 2.76 },
    { year: 2016, value: 2.91 },
    { year: 2017, value: 3.23 },
    { year: 2018, value: 2.94 },
    { year: 2019, value: 3.53 },
    { year: 2020, value: 4.05 },
    { year: 2021, value: 4.73 },
    { year: 2022, value: 3.75 },
    { year: 2023, value: 4.31 },
    { year: 2024, value: 4.99 },
    { year: 2025, value: 5.39 },
    { year: 2026, value: 6.02 },
  ],
  pe: [
    { year: 1871, value: 11.10 },
    { year: 1872, value: 12.07 },
    { year: 1873, value: 11.82 },
    { year: 1874, value: 10.13 },
    { year: 1875, value: 10.05 },
    { year: 1876, value: 12.62 },
    { year: 1877, value: 12.60 },
    { year: 1878, value: 10.80 },
    { year: 1879, value: 11.34 },
    { year: 1880, value: 13.13 },
    { year: 1881, value: 12.74 },
    { year: 1882, value: 13.48 },
    { year: 1883, value: 13.59 },
    { year: 1884, value: 13.20 },
    { year: 1885, value: 13.82 },
    { year: 1886, value: 18.91 },
    { year: 1887, value: 16.78 },
    { year: 1888, value: 15.10 },
    { year: 1889, value: 19.90 },
    { year: 1890, value: 17.98 },
    { year: 1891, value: 16.45 },
    { year: 1892, value: 16.09 },
    { year: 1893, value: 15.55 },
    { year: 1894, value: 17.16 },
    { year: 1895, value: 25.37 },
    { year: 1896, value: 17.31 },
    { year: 1897, value: 19.33 },
    { year: 1898, value: 15.58 },
    { year: 1899, value: 16.85 },
    { year: 1900, value: 12.71 },
    { year: 1905, value: 16.69 },
    { year: 1910, value: 13.31 },
    { year: 1915, value: 13.60 },
    { year: 1920, value: 9.61 },
    { year: 1925, value: 11.06 },
    { year: 1930, value: 13.94 },
    { year: 1935, value: 16.25 },
    { year: 1940, value: 13.23 },
    { year: 1945, value: 14.35 },
    { year: 1950, value: 7.22 },
    { year: 1955, value: 12.56 },
    { year: 1960, value: 17.12 },
    { year: 1965, value: 18.75 },
    { year: 1970, value: 15.76 },
    { year: 1975, value: 8.30 },
    { year: 1980, value: 7.39 },
    { year: 1985, value: 10.36 },
    { year: 1990, value: 15.13 },
    { year: 1995, value: 14.89 },
    { year: 2000, value: 29.04 },
    { year: 2001, value: 27.55 },
    { year: 2002, value: 46.17 },
    { year: 2003, value: 31.43 },
    { year: 2004, value: 22.73 },
    { year: 2005, value: 19.99 },
    { year: 2006, value: 18.07 },
    { year: 2007, value: 17.36 },
    { year: 2008, value: 21.46 },
    { year: 2009, value: 70.91 },
    { year: 2010, value: 20.70 },
    { year: 2011, value: 16.30 },
    { year: 2012, value: 14.87 },
    { year: 2013, value: 17.03 },
    { year: 2014, value: 18.15 },
    { year: 2015, value: 20.02 },
    { year: 2016, value: 22.18 },
    { year: 2017, value: 23.59 },
    { year: 2018, value: 24.97 },
    { year: 2019, value: 19.60 },
    { year: 2020, value: 24.88 },
    { year: 2021, value: 35.96 },
    { year: 2022, value: 23.11 },
    { year: 2023, value: 22.82 },
    { year: 2024, value: 25.01 },
    { year: 2025, value: 28.16 },
    { year: 2026, value: 32.67 },
  ],
};

const breadthStats = {
  ma50: 52.28,
  ma200: 55.26,
  index: 7580.06,
  updated: "May 29, 2026",
};

const breadthSeries = [
  { year: 2006, ma50: 62, ma200: 70, index: 1250 },
  { year: 2007, ma50: 58, ma200: 74, index: 1468 },
  { year: 2008, ma50: 38, ma200: 33, index: 903 },
  { year: 2009, ma50: 82, ma200: 78, index: 1115 },
  { year: 2010, ma50: 58, ma200: 63, index: 1258 },
  { year: 2011, ma50: 45, ma200: 51, index: 1258 },
  { year: 2012, ma50: 71.54, ma200: 68.10, index: 1406.58 },
  { year: 2013, ma50: 72, ma200: 78, index: 1848 },
  { year: 2014, ma50: 68, ma200: 73, index: 2059 },
  { year: 2015, ma50: 47, ma200: 52, index: 2044 },
  { year: 2016, ma50: 62, ma200: 61, index: 2239 },
  { year: 2017, ma50: 70, ma200: 76, index: 2674 },
  { year: 2018, ma50: 42, ma200: 49, index: 2507 },
  { year: 2019, ma50: 71, ma200: 74, index: 3231 },
  { year: 2020, ma50: 83, ma200: 76, index: 3756 },
  { year: 2021, ma50: 72, ma200: 82, index: 4766 },
  { year: 2022, ma50: 39, ma200: 42, index: 3839 },
  { year: 2023, ma50: 61, ma200: 58, index: 4770 },
  { year: 2024, ma50: 66, ma200: 62, index: 5881 },
  { year: 2025, ma50: 56, ma200: 57, index: 6500 },
  { year: 2026, ma50: 52.28, ma200: 55.26, index: 7580.06 },
];

const drawdowns = [
  { eventEn: "Great Depression", eventZh: "大萧条", peak: "1929-09-16", trough: "1932-06-01", months: 33, decline: -86.2 },
  { eventEn: "1937-1942 Bear Market", eventZh: "1937-1942 熊市", peak: "1937-03-10", trough: "1942-04-28", months: 61, decline: -60.0 },
  { eventEn: "Global Financial Crisis", eventZh: "全球金融危机", peak: "2007-10-09", trough: "2009-03-09", months: 17, decline: -56.8 },
  { eventEn: "Dot-Com Bust", eventZh: "互联网泡沫破裂", peak: "2000-03-24", trough: "2002-10-09", months: 31, decline: -49.1 },
  { eventEn: "1973-1974 Bear Market", eventZh: "1973-1974 熊市", peak: "1973-01-11", trough: "1974-10-03", months: 21, decline: -48.2 },
  { eventEn: "1968-1970 Bear Market", eventZh: "1968-1970 熊市", peak: "1968-11-29", trough: "1970-05-26", months: 18, decline: -36.1 },
  { eventEn: "COVID Crash", eventZh: "新冠崩盘", peak: "2020-02-19", trough: "2020-03-23", months: 1, decline: -33.9 },
  { eventEn: "Black Monday 1987", eventZh: "1987 黑色星期一", peak: "1987-08-25", trough: "1987-12-04", months: 3, decline: -33.5 },
  { eventEn: "Post-WWII Bear Market", eventZh: "二战后熊市", peak: "1946-05-29", trough: "1949-06-13", months: 37, decline: -29.6 },
  { eventEn: "Kennedy Slide", eventZh: "肯尼迪滑坡", peak: "1961-12-12", trough: "1962-06-26", months: 6, decline: -28.0 },
  { eventEn: "1980-1982 Bear Market", eventZh: "1980-1982 熊市", peak: "1980-11-28", trough: "1982-08-12", months: 20, decline: -27.1 },
  { eventEn: "Inflation / Rate Shock", eventZh: "通胀与加息冲击", peak: "2022-01-03", trough: "2022-10-12", months: 9, decline: -25.4 },
  { eventEn: "1966 Bear Market", eventZh: "1966 熊市", peak: "1966-02-09", trough: "1966-10-07", months: 8, decline: -22.2 },
  { eventEn: "1956-1957 Bear Market", eventZh: "1956-1957 熊市", peak: "1956-08-02", trough: "1957-10-22", months: 15, decline: -21.6 },
];

const metricGroups = [
  {
    titleZh: "估值类",
    titleEn: "Valuation",
    items: [
      { zh: "PE", en: "PE", value: "32.67x", status: "done" },
      { zh: "PB", en: "PB", value: "6.02x", status: "done" },
      { zh: "Forward PE", en: "Forward PE", value: "21.07x", status: "priority" },
      { zh: "CAPE / Shiller PE", en: "CAPE / Shiller PE", value: "41.06x", status: "priority" },
      { zh: "PS", en: "Price to Sales", value: "3.69x", status: "todo" },
      { zh: "Dividend Yield", en: "Dividend Yield", value: "0.98%", status: "todo" },
      { zh: "Earnings Yield", en: "Earnings Yield", value: "3.06%", status: "todo" },
    ],
  },
  {
    titleZh: "盈利与基本面",
    titleEn: "Earnings & Fundamentals",
    items: [
      { zh: "EPS", en: "EPS", value: "$239.98", status: "todo" },
      { zh: "Forward EPS", en: "Forward EPS", value: "$359.81", status: "todo" },
      { zh: "Profit Margin", en: "Profit Margin", value: "13.4%", status: "todo" },
      { zh: "Revenue Growth", en: "Revenue Growth", value: "5.6%", status: "todo" },
      { zh: "Earnings Growth", en: "Earnings Growth", value: "12.4%", status: "todo" },
    ],
  },
  {
    titleZh: "利率与风险溢价",
    titleEn: "Rates & Risk Premium",
    items: [
      { zh: "10Y Treasury Yield", en: "10Y Treasury Yield", value: "4.45%", status: "priority" },
      { zh: "Real Yield", en: "Real Yield", value: "1.89%", status: "todo" },
      { zh: "Equity Risk Premium", en: "Equity Risk Premium", value: "5.20%", status: "priority" },
      { zh: "Fed Funds Rate", en: "Fed Funds Rate", value: "3.62%", status: "todo" },
      { zh: "Credit Spread", en: "Credit Spread", value: "3.10%", status: "todo" },
    ],
  },
  {
    titleZh: "价格趋势",
    titleEn: "Price Trend",
    items: [
      { zh: "年度回报", en: "Annual Returns", value: "10.6% avg", status: "done" },
      { zh: "价格极端回撤", en: "Extreme Drawdowns", value: "-86.2%", status: "done" },
      { zh: "S&P 500 Index Price", en: "S&P 500 Index Price", value: "7580.06", status: "todo" },
      { zh: "200日均线距离", en: "Distance to 200D MA", value: "+13.8%", status: "todo" },
      { zh: "52周高低点距离", en: "Distance to 52W High/Low", value: "-1.9% / +37.6%", status: "todo" },
      { zh: "Drawdown Curve", en: "Drawdown Curve", value: "-1.9%", status: "priority" },
      { zh: "Rolling Returns", en: "Rolling Returns", value: "1Y +23.3%", status: "todo" },
    ],
  },
  {
    titleZh: "市场宽度",
    titleEn: "Market Breadth",
    items: [
      { zh: "MA50 / MA200 上方股票比例", en: "Stocks Above MA50 / MA200", value: "52.28% / 55.26%", status: "done" },
      { zh: "Advance-Decline Line", en: "Advance-Decline Line", value: "+1,842", status: "todo" },
      { zh: "New Highs - New Lows", en: "New Highs - New Lows", value: "+84", status: "todo" },
      { zh: "等权/市值加权比", en: "Equal Weight / Cap Weight Ratio", value: "0.82", status: "todo" },
      { zh: "Top 10 Weight", en: "Top 10 Weight", value: "37.4%", status: "todo" },
      { zh: "Sector Breadth", en: "Sector Breadth", value: "8/11", status: "todo" },
    ],
  },
  {
    titleZh: "情绪与仓位",
    titleEn: "Sentiment & Positioning",
    items: [
      { zh: "VIX", en: "VIX", value: "14.9", status: "todo" },
      { zh: "Put/Call Ratio", en: "Put/Call Ratio", value: "0.77", status: "todo" },
      { zh: "AAII Sentiment", en: "AAII Sentiment", value: "Bull 43.2%", status: "todo" },
      { zh: "NAAIM Exposure", en: "NAAIM Exposure", value: "82.6", status: "todo" },
      { zh: "Fund Flow", en: "Fund Flow", value: "+$12.4B", status: "todo" },
    ],
  },
  {
    titleZh: "宏观环境",
    titleEn: "Macro Environment",
    items: [
      { zh: "ISM PMI", en: "ISM PMI", value: "51.1", status: "todo" },
      { zh: "Unemployment Rate", en: "Unemployment Rate", value: "4.3%", status: "todo" },
      { zh: "Inflation CPI", en: "Inflation CPI", value: "3.8%", status: "todo" },
      { zh: "Yield Curve 10Y-2Y", en: "Yield Curve 10Y-2Y", value: "+0.41%", status: "todo" },
      { zh: "GDP Growth", en: "GDP Growth", value: "2.5%", status: "todo" },
      { zh: "Liquidity / M2", en: "Liquidity / M2", value: "$22.1T", status: "todo" },
    ],
  },
];

const uiCopy = {
  zh: {
    langButton: "EN / 中文",
    dataAsOf: "数据截止：2026-05-29｜非实时",
    navOverview: "总览",
    navBreadth: "市场宽度",
    navExtremes: "价格极端",
    navMetrics: "指标总览",
    metricsTitle: "指标总览",
    built: "已有数值",
    nextUp: "重点指标",
    totalMetrics: "全部指标",
    metricsNote: "已纳入前面提到的全部 S&P 500 指标，并在右侧写入当前值或最近参考值。",
    statusDone: "已做",
    statusPriority: "优先",
    statusTodo: "待做",
    valuationChartTitle: "估值折线图",
    current: "当前",
    historicalAverage: "历史均值",
    historicalPercentile: "历史百分位",
    ma50Label: "MA50 上方股票",
    ma200Label: "MA200 上方股票",
    extremeDataTitle: "价格极端数据",
    sample: "样本",
    maxDrawdown: "最大跌幅",
    longestDuration: "最长持续",
    years: "年数",
    average: "平均",
    start: "起始",
    end: "结束",
    valuationLevel: "估值水位",
    peAvg: "PE 历史均值",
    pbAvg: "PB 历史均值",
    peNow: "PE 当前",
    pbNow: "PB 当前",
    pePercentileLabel: "PE 历史百分位",
    pbPercentileLabel: "PB 历史百分位",
    download: "下载图片",
    generating: "生成中...",
    avgShort: "均值",
    nowShort: "当前",
    ma50Legend: "MA50 广度",
    ma200Legend: "MA200 广度",
    indexLegend: "S&P 500 指数",
    rangePrefix: "近",
    rangeSuffix: "年",
    event: "事件",
    peak: "峰值",
    trough: "低点",
    duration: "持续时间",
    decline: "跌幅",
    month: "月",
    empty: "所选年份范围内没有 20% 以上的主要回撤样本。",
  },
  en: {
    langButton: "中文 / EN",
    dataAsOf: "Data as of May 29, 2026 | Not real-time",
    navOverview: "Overview",
    navBreadth: "Breadth",
    navExtremes: "Price Extremes",
    navMetrics: "Metrics",
    metricsTitle: "Metrics Overview",
    built: "With Values",
    nextUp: "Key Metrics",
    totalMetrics: "Total Metrics",
    metricsNote: "Includes the full S&P 500 metric list discussed earlier, with current or latest reference values.",
    statusDone: "Built",
    statusPriority: "Priority",
    statusTodo: "Todo",
    valuationChartTitle: "Valuation Chart",
    current: "Current",
    historicalAverage: "Historical Avg",
    historicalPercentile: "Historical Percentile",
    ma50Label: "Stocks Above MA50",
    ma200Label: "Stocks Above MA200",
    extremeDataTitle: "Price Extreme Data",
    sample: "Samples",
    maxDrawdown: "Max Drawdown",
    longestDuration: "Longest Decline",
    years: "Years",
    average: "Average",
    start: "Start",
    end: "End",
    valuationLevel: "Valuation Level",
    peAvg: "PE Historical Avg",
    pbAvg: "PB Historical Avg",
    peNow: "PE Current",
    pbNow: "PB Current",
    pePercentileLabel: "PE Historical Percentile",
    pbPercentileLabel: "PB Historical Percentile",
    download: "Download Image",
    generating: "Generating...",
    avgShort: "Avg",
    nowShort: "Now",
    ma50Legend: "MA50 Breadth",
    ma200Legend: "MA200 Breadth",
    indexLegend: "S&P 500 Index",
    rangePrefix: "Last ",
    rangeSuffix: "Y",
    event: "Event",
    peak: "Peak",
    trough: "Trough",
    duration: "Duration",
    decline: "Decline",
    month: "mo",
    empty: "No major 20%+ drawdown sample in the selected range.",
  },
};

let language = "zh";

const startYear = document.querySelector("#startYear");
const endYear = document.querySelector("#endYear");
const grid = document.querySelector("#returnsGrid");
const downloadButton = document.querySelector("#downloadPoster");
const languageButton = document.querySelector("#languageToggle");
const quickButtons = document.querySelectorAll("[data-years]");
const viewButtons = document.querySelectorAll("[data-view]");
const viewPanels = document.querySelectorAll("[data-panel]");

const labels = {
  avg: document.querySelector("#avgLabel"),
  avgEn: document.querySelector("#avgLabelEn"),
  rangeCn: document.querySelector("#rangeLabelCn"),
  rangeEn: document.querySelector("#rangeLabelEn"),
  subtitle: document.querySelector("#subtitle"),
  count: document.querySelector("#countLabel"),
  statAverage: document.querySelector("#statAverage"),
  statCagr: document.querySelector("#statCagr"),
  peAverage: document.querySelector("#peAverage"),
  peCurrent: document.querySelector("#peCurrent"),
  pePercentile: document.querySelector("#pePercentile"),
  pbAverage: document.querySelector("#pbAverage"),
  pbCurrent: document.querySelector("#pbCurrent"),
  pbPercentile: document.querySelector("#pbPercentile"),
  pbChartCurrent: document.querySelector("#pbChartCurrent"),
  pbChartAverage: document.querySelector("#pbChartAverage"),
  pbChartPercentile: document.querySelector("#pbChartPercentile"),
  peChartCurrent: document.querySelector("#peChartCurrent"),
  peChartAverage: document.querySelector("#peChartAverage"),
  peChartPercentile: document.querySelector("#peChartPercentile"),
  breadthMa50: document.querySelector("#breadthMa50"),
  breadthMa200: document.querySelector("#breadthMa200"),
  breadthIndex: document.querySelector("#breadthIndex"),
  extremeCount: document.querySelector("#extremeCount"),
  worstDrawdown: document.querySelector("#worstDrawdown"),
  longestDecline: document.querySelector("#longestDecline"),
  drawdownTable: document.querySelector("#drawdownTable"),
  builtMetricCount: document.querySelector("#builtMetricCount"),
  priorityMetricCount: document.querySelector("#priorityMetricCount"),
  totalMetricCount: document.querySelector("#totalMetricCount"),
  metricsBoard: document.querySelector("#metricsBoard"),
};

function formatPercent(value) {
  return `${value.toFixed(1)}%`;
}

function percentileFromRank(metric) {
  return Math.round(((metric.sampleCount - metric.higherCount) / metric.sampleCount) * 100);
}

function fillYearOptions() {
  const years = returns.map((item) => item.year);
  for (const year of years) {
    startYear.add(new Option(year, year));
    endYear.add(new Option(year, year));
  }
  startYear.value = years.at(-1) - 40 + 1;
  endYear.value = years[years.length - 1];
}

function selectedReturns() {
  let start = Number(startYear.value);
  let end = Number(endYear.value);

  if (start > end) {
    [start, end] = [end, start];
    startYear.value = start;
    endYear.value = end;
  }

  return returns.filter((item) => item.year >= start && item.year <= end);
}

function calculateStats(items) {
  const average = items.reduce((sum, item) => sum + item.value, 0) / items.length;
  const growth = items.reduce((total, item) => total * (1 + item.value / 100), 1);
  const cagr = (growth ** (1 / items.length) - 1) * 100;
  return { average, cagr };
}

function cardClass(value) {
  if (value > 0) return "gain";
  if (value < 0) return "loss";
  return "flat";
}

function shade(value) {
  return Math.min(0.92, Math.max(0.24, Math.abs(value) / 42));
}

function render() {
  const items = selectedReturns();
  const { average, cagr } = calculateStats(items);
  const start = items[0].year;
  const end = items[items.length - 1].year;
  const count = items.length;
  const copy = uiCopy[language];

  labels.avg.textContent = formatPercent(average);
  labels.avgEn.textContent = `${formatPercent(average)} annual price returns`;
  labels.rangeCn.textContent = `${start}-${end}年`;
  labels.rangeEn.textContent = `${start} to ${end}`;
  labels.subtitle.textContent = `RETURNS OVER ${count} ${count === 1 ? "YEAR" : "YEARS"}`;
  labels.count.textContent = count;
  labels.statAverage.textContent = formatPercent(average);
  labels.statCagr.textContent = formatPercent(cagr);
  labels.peAverage.textContent = `${valuations.pe.average.toFixed(2)}x`;
  labels.peCurrent.textContent = `${valuations.pe.current.toFixed(2)}x`;
  labels.pePercentile.textContent = `${valuations.pe.percentile}%`;
  labels.pbAverage.textContent = `${valuations.pb.average.toFixed(2)}x`;
  labels.pbCurrent.textContent = `${valuations.pb.current.toFixed(2)}x`;
  labels.pbPercentile.textContent = `${valuations.pb.percentile}%`;
  labels.pbChartCurrent.textContent = `${valuations.pb.current.toFixed(2)}x`;
  labels.pbChartAverage.textContent = `${valuations.pb.average.toFixed(2)}x`;
  labels.pbChartPercentile.textContent = `${valuations.pb.percentile}%`;
  labels.peChartCurrent.textContent = `${valuations.pe.current.toFixed(2)}x`;
  labels.peChartAverage.textContent = `${valuations.pe.average.toFixed(2)}x`;
  labels.peChartPercentile.textContent = `${valuations.pe.percentile}%`;
  labels.breadthMa50.textContent = `${breadthStats.ma50.toFixed(2)}%`;
  labels.breadthMa200.textContent = `${breadthStats.ma200.toFixed(2)}%`;
  labels.breadthIndex.textContent = breadthStats.index.toFixed(2);

  grid.style.setProperty("--columns", Math.min(10, count));
  grid.setAttribute("aria-label", `Annual S&P 500 returns from ${start} to ${end}`);
  grid.innerHTML = items.map((item) => {
    return `
      <article class="year-card ${cardClass(item.value)}" style="--shade: ${shade(item.value).toFixed(2)}">
        <strong>${formatPercent(item.value)}</strong>
        <span>${item.year}</span>
      </article>
    `;
  }).join("");

  quickButtons.forEach((button) => {
    const years = Number(button.dataset.years);
    const requestedCount = Math.min(years, returns.length);
    button.classList.toggle("active", requestedCount === count && end === returns.at(-1).year);
  });

  renderLanguage();
  renderChartsForSelectedRange();
  renderDrawdowns();
  renderMetricsOverview();
}

quickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const years = Number(button.dataset.years);
    setLastYears(years);
    render();
  });
});

function setLastYears(years) {
  const firstYear = returns[0].year;
  const lastYear = returns.at(-1).year;
  startYear.value = Math.max(firstYear, lastYear - years + 1);
  endYear.value = lastYear;
}

startYear.addEventListener("change", render);
endYear.addEventListener("change", render);

downloadButton.addEventListener("click", downloadPoster);
languageButton.addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  render();
});
viewButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveView(button.dataset.view));
});

fillYearOptions();
render();

function setActiveView(view) {
  viewButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  viewPanels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === view));
}

function renderLanguage() {
  const copy = uiCopy[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  languageButton.textContent = copy.langButton;
  document.querySelectorAll("[data-ui]").forEach((node) => {
    node.textContent = copy[node.dataset.ui];
  });
  document.querySelectorAll("[data-range-label]").forEach((node) => {
    const years = node.dataset.rangeLabel;
    node.textContent = language === "zh" ? `${copy.rangePrefix}${years}${copy.rangeSuffix}` : `${copy.rangePrefix}${years}${copy.rangeSuffix}`;
  });
}

function selectedRange() {
  return {
    start: Number(startYear.value),
    end: Number(endYear.value),
  };
}

function filterSeriesBySelectedRange(series) {
  const { start, end } = selectedRange();
  const filtered = series.filter((item) => item.year >= start && item.year <= end);
  return filtered.length > 1 ? filtered : series.slice(-Math.min(10, series.length));
}

function filteredDrawdowns() {
  const { start, end } = selectedRange();
  return drawdowns
    .filter((item) => {
      const peakYear = Number(item.peak.slice(0, 4));
      return peakYear >= start && peakYear <= end;
    })
    .sort((a, b) => a.decline - b.decline);
}

function renderChartsForSelectedRange() {
  renderLineChart("pb");
  renderLineChart("pe");
  renderBreadthChart();
}

function renderLineChart(metric) {
  const copy = uiCopy[language];
  const target = document.querySelector(`#${metric}Chart`);
  const data = filterSeriesBySelectedRange(valuationSeries[metric]);
  const valueInfo = valuations[metric];
  const width = 740;
  const height = 560;
  const pad = { top: 28, right: 28, bottom: 48, left: 58 };
  const values = data.map((item) => item.value);
  const years = data.map((item) => item.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  const maxValue = Math.max(...values, valueInfo.average) * 1.08;
  const minValue = Math.min(0, Math.min(...values) * 0.92);
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const x = (year) => pad.left + ((year - minYear) / (maxYear - minYear)) * plotW;
  const y = (value) => pad.top + (1 - (value - minValue) / (maxValue - minValue)) * plotH;
  const path = data.map((item, index) => `${index === 0 ? "M" : "L"} ${x(item.year).toFixed(1)} ${y(item.value).toFixed(1)}`).join(" ");
  const latest = data.at(-1);
  const yTicks = Array.from({ length: 5 }, (_, index) => minValue + ((maxValue - minValue) / 4) * index);
  const yearTicks = makeYearTicks(minYear, maxYear);

  target.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="S&P 500 ${metric.toUpperCase()} historical line chart">
      ${yTicks.map((tick) => `
        <line class="chart-grid-line" x1="${pad.left}" y1="${y(tick).toFixed(1)}" x2="${width - pad.right}" y2="${y(tick).toFixed(1)}"></line>
        <text class="chart-label" x="14" y="${(y(tick) + 4).toFixed(1)}">${tick.toFixed(metric === "pb" ? 1 : 0)}x</text>
      `).join("")}
      ${yearTicks.map((tick) => `
        <text class="chart-label" x="${x(tick).toFixed(1)}" y="${height - 16}" text-anchor="middle">${tick}</text>
      `).join("")}
      <line class="chart-axis" x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}"></line>
      <line class="chart-average-line" x1="${pad.left}" y1="${y(valueInfo.average).toFixed(1)}" x2="${width - pad.right}" y2="${y(valueInfo.average).toFixed(1)}"></line>
      <text class="chart-label" x="${width - pad.right - 86}" y="${(y(valueInfo.average) - 8).toFixed(1)}">${copy.avgShort} ${valueInfo.average.toFixed(2)}x</text>
      <path class="chart-series" d="${path}"></path>
      <circle class="chart-point" cx="${x(latest.year).toFixed(1)}" cy="${y(latest.value).toFixed(1)}" r="7"></circle>
      <text class="chart-value-label" x="${(x(latest.year) - 76).toFixed(1)}" y="${(y(latest.value) - 14).toFixed(1)}">${copy.nowShort} ${latest.value.toFixed(2)}x</text>
    </svg>
  `;
}

function renderBreadthChart() {
  const copy = uiCopy[language];
  const target = document.querySelector("#breadthChart");
  const data = filterSeriesBySelectedRange(breadthSeries);
  const width = 740;
  const height = 560;
  const pad = { top: 28, right: 58, bottom: 58, left: 58 };
  const years = data.map((item) => item.year);
  const indexes = data.map((item) => item.index);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  const minIndex = Math.min(...indexes) * 0.9;
  const maxIndex = Math.max(...indexes) * 1.08;
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const x = (year) => pad.left + ((year - minYear) / (maxYear - minYear)) * plotW;
  const yBreadth = (value) => pad.top + (1 - value / 100) * plotH;
  const yIndex = (value) => pad.top + (1 - (value - minIndex) / (maxIndex - minIndex)) * plotH;
  const linePath = (key, yFn) => data.map((item, index) => `${index === 0 ? "M" : "L"} ${x(item.year).toFixed(1)} ${yFn(item[key]).toFixed(1)}`).join(" ");
  const yearTicks = makeYearTicks(minYear, maxYear);
  const breadthTicks = [0, 25, 50, 75, 100];

  target.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="S&P 500 market breadth chart">
      ${breadthTicks.map((tick) => `
        <line class="chart-grid-line" x1="${pad.left}" y1="${yBreadth(tick).toFixed(1)}" x2="${width - pad.right}" y2="${yBreadth(tick).toFixed(1)}"></line>
        <text class="chart-label" x="14" y="${(yBreadth(tick) + 4).toFixed(1)}">${tick}%</text>
      `).join("")}
      <line class="chart-threshold" x1="${pad.left}" y1="${yBreadth(75).toFixed(1)}" x2="${width - pad.right}" y2="${yBreadth(75).toFixed(1)}"></line>
      <line class="chart-threshold" x1="${pad.left}" y1="${yBreadth(50).toFixed(1)}" x2="${width - pad.right}" y2="${yBreadth(50).toFixed(1)}"></line>
      <line class="chart-threshold" x1="${pad.left}" y1="${yBreadth(25).toFixed(1)}" x2="${width - pad.right}" y2="${yBreadth(25).toFixed(1)}"></line>
      ${yearTicks.map((tick) => `
        <text class="chart-label" x="${x(tick).toFixed(1)}" y="${height - 20}" text-anchor="middle">${tick}</text>
      `).join("")}
      <text class="chart-label" x="${width - 48}" y="${pad.top + 4}">Index</text>
      <text class="chart-label" x="${width - 48}" y="${height - pad.bottom + 4}">${Math.round(minIndex)}</text>
      <text class="chart-label" x="${width - 48}" y="${pad.top + 104}">${Math.round(maxIndex)}</text>
      <path class="breadth-index" d="${linePath("index", yIndex)}"></path>
      <path class="breadth-ma50" d="${linePath("ma50", yBreadth)}"></path>
      <path class="breadth-ma200" d="${linePath("ma200", yBreadth)}"></path>
      <text class="chart-legend" x="${pad.left}" y="${height - 8}">${copy.ma50Legend}</text>
      <text class="chart-legend" x="${pad.left + 150}" y="${height - 8}">${copy.ma200Legend}</text>
      <text class="chart-legend" x="${pad.left + 318}" y="${height - 8}">${copy.indexLegend}</text>
    </svg>
  `;
}

function renderDrawdowns() {
  const rows = filteredDrawdowns();
  const copy = uiCopy[language];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = copy[node.dataset.i18n];
  });
  labels.extremeCount.textContent = rows.length;

  if (!rows.length) {
    labels.worstDrawdown.textContent = "--";
    labels.longestDecline.textContent = "--";
    labels.drawdownTable.innerHTML = `
      <tr class="empty-row">
        <td colspan="5">${copy.empty}</td>
      </tr>
    `;
    return;
  }

  const worst = rows[0];
  const longest = rows.reduce((max, item) => item.months > max.months ? item : max, rows[0]);
  labels.worstDrawdown.textContent = `${worst.decline.toFixed(1)}%`;
  labels.longestDecline.textContent = `${longest.months}${copy.month}`;
  labels.drawdownTable.innerHTML = rows.map((item) => `
    <tr>
      <td>${language === "zh" ? item.eventZh : item.eventEn}</td>
      <td>${item.peak}</td>
      <td>${item.trough}</td>
      <td class="duration-cell">${item.months}${copy.month}</td>
      <td class="loss-cell">${item.decline.toFixed(1)}%</td>
    </tr>
  `).join("");
}

function renderMetricsOverview() {
  const copy = uiCopy[language];
  const allItems = metricGroups.flatMap((group) => group.items);
  labels.builtMetricCount.textContent = allItems.filter((item) => item.value).length;
  labels.priorityMetricCount.textContent = allItems.filter((item) => item.status === "priority").length;
  labels.totalMetricCount.textContent = allItems.length;
  labels.metricsBoard.innerHTML = metricGroups.map((group) => {
    const title = language === "zh" ? group.titleZh : group.titleEn;
    const items = group.items.map((item) => {
      const name = language === "zh" ? item.zh : item.en;
      return `
        <li class="metric-${item.status}">
          <span class="metric-dot"></span>
          <span>${name}</span>
          <span class="metric-value">${item.value}</span>
        </li>
      `;
    }).join("");

    return `
      <section class="metric-group">
        <h2>${title}</h2>
        <ul class="metric-list">${items}</ul>
      </section>
    `;
  }).join("");
}

function makeYearTicks(minYear, maxYear) {
  if (minYear === maxYear) return [minYear];
  return Array.from(new Set([
    minYear,
    Math.round(minYear + (maxYear - minYear) * 0.25),
    Math.round(minYear + (maxYear - minYear) * 0.5),
    Math.round(minYear + (maxYear - minYear) * 0.75),
    maxYear,
  ]));
}

async function downloadPoster() {
  downloadButton.disabled = true;
  downloadButton.textContent = uiCopy[language].generating;

  try {
    const canvas = drawPosterCanvas();
    const pngBlob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    const pngUrl = URL.createObjectURL(pngBlob);
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = `sp500-returns-${startYear.value}-${endYear.value}.png`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(pngUrl);
  } finally {
    downloadButton.disabled = false;
    downloadButton.textContent = uiCopy[language].download;
  }
}

function drawPosterCanvas() {
  const items = selectedReturns();
  const { average } = calculateStats(items);
  const start = items[0].year;
  const end = items[items.length - 1].year;
  const count = items.length;
  const scale = 2;
  const width = 800;
  const columns = Math.min(10, count);
  const gapX = 14;
  const gapY = 28;
  const marginX = 30;
  const cardW = (width - marginX * 2 - gapX * (columns - 1)) / columns;
  const cardH = cardW * 1.08;
  const gridTop = 520;
  const rows = Math.ceil(count / columns);
  const footerH = 128;
  const height = Math.max(940, gridTop + rows * (cardH + 28) + (rows - 1) * gapY + footerH);
  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);

  drawBackground(ctx, width, height);
  drawHeader(ctx, width, { average, start, end, count });
  items.forEach((item, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = marginX + col * (cardW + gapX);
    const y = gridTop + row * (cardH + 28 + gapY);
    drawReturnCard(ctx, item, x, y, cardW, cardH);
  });
  drawValuations(ctx, width, height - footerH + 16);
  drawFooter(ctx, width, height);

  return canvas;
}

function drawBackground(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#2b2838");
  gradient.addColorStop(1, "#22212d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawHeader(ctx, width, { average, start, end, count }) {
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  drawText(ctx, `标普500指数${start}-${end}年平均价格回报率为`, width / 2, 48, 32, "#ffffff", 900);
  drawText(ctx, formatPercent(average), width / 2, 94, 42, "#8df2f1", 900);
  drawText(ctx, "S&P 500", width / 2, 210, 112, "#f73348", 900, "Arial Black, Arial");
  drawText(ctx, `RETURNS OVER ${count} ${count === 1 ? "YEAR" : "YEARS"}`, width / 2, 335, 37, "#ffffff", 900);
  drawText(ctx, "The S&P 500 averaged", width / 2, 405, 22, "#ffffff", 800);
  drawText(ctx, `${formatPercent(average)} annual price returns from ${start} to ${end}`, width / 2, 440, 25, "#8df2f1", 900);
}

function drawReturnCard(ctx, item, x, y, width, height) {
  const colorSet = item.value > 0
    ? ["#0b7d54", "#8ede76"]
    : item.value < 0
      ? ["#970a33", "#ff3158"]
      : ["#b4b4b4", "#f2f2f2"];
  const radius = 12;

  ctx.save();
  roundedRect(ctx, x, y, width, height, radius);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  roundedRect(ctx, x + 5, y + 5, width - 10, height - 10, radius - 5);
  const gradient = ctx.createLinearGradient(0, y + 5, 0, y + height - 5);
  gradient.addColorStop(0, colorSet[0]);
  gradient.addColorStop(1, colorSet[1]);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.restore();

  drawText(ctx, formatPercent(item.value), x + width / 2, y + height / 2, Math.max(13, width * 0.21), "#ffffff", 900);
  drawText(ctx, String(item.year), x + width / 2, y + height + 24, Math.max(16, width * 0.26), "#ffffff", 900);
}

function drawFooter(ctx, width, height) {
  drawText(ctx, "Returns: price return only, dividends excluded. Valuation: Multpl PE/PB, updated May 29, 2026.", width / 2, height - 24, 13, "rgba(255,255,255,0.72)", 700);
}

function drawValuations(ctx, width, y) {
  const marginX = 30;
  const cardGap = 10;
  const cardW = (width - marginX * 2 - cardGap) / 2;
  const cardH = 48;
  const rows = [
    ["PE Avg", `${valuations.pe.average.toFixed(2)}x`, "PB Avg", `${valuations.pb.average.toFixed(2)}x`],
    ["PE Now", `${valuations.pe.current.toFixed(2)}x`, "PB Now", `${valuations.pb.current.toFixed(2)}x`],
    ["PE Percentile", `${valuations.pe.percentile}%`, "PB Percentile", `${valuations.pb.percentile}%`],
  ];

  rows.forEach((row, rowIndex) => {
    for (let i = 0; i < 2; i += 1) {
      const x = marginX + i * (cardW + cardGap);
      const cardY = y + rowIndex * (cardH + 10);
      ctx.fillStyle = "rgba(0,0,0,0.18)";
      ctx.fillRect(x, cardY, cardW, cardH);
      ctx.fillStyle = "#71f0ef";
      ctx.fillRect(x, cardY, cardW, 3);
      ctx.textAlign = "left";
      drawText(ctx, row[i * 2], x + 12, cardY + 18, 11, "rgba(255,255,255,0.72)", 800);
      drawText(ctx, row[i * 2 + 1], x + 12, cardY + 39, 20, "#ffffff", 900);
    }
  });
}

function drawText(ctx, text, x, y, size, color, weight = 700, family = "Arial, PingFang SC, Microsoft YaHei, sans-serif") {
  ctx.save();
  ctx.font = `${weight} ${size}px ${family}`;
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.fillText(text, x + 3, y + 4);
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  ctx.restore();
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}
