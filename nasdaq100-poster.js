const returns = [
  { year: 1986, value: 4.58 },
  { year: 1987, value: -10.41 },
  { year: 1988, value: 13.27 },
  { year: 1989, value: 26.17 },
  { year: 1990, value: -10.41 },
  { year: 1991, value: 64.99 },
  { year: 1992, value: 8.86 },
  { year: 1993, value: 10.58 },
  { year: 1994, value: 1.5 },
  { year: 1995, value: 42.54 },
  { year: 1996, value: 42.54 },
  { year: 1997, value: 20.63 },
  { year: 1998, value: 85.31 },
  { year: 1999, value: 101.95 },
  { year: 2000, value: -36.84 },
  { year: 2001, value: -32.65 },
  { year: 2002, value: -37.58 },
  { year: 2003, value: 49.12 },
  { year: 2004, value: 10.44 },
  { year: 2005, value: 1.49 },
  { year: 2006, value: 6.79 },
  { year: 2007, value: 18.67 },
  { year: 2008, value: -41.89 },
  { year: 2009, value: 53.54 },
  { year: 2010, value: 19.22 },
  { year: 2011, value: 2.7 },
  { year: 2012, value: 16.82 },
  { year: 2013, value: 34.99 },
  { year: 2014, value: 17.94 },
  { year: 2015, value: 8.43 },
  { year: 2016, value: 5.89 },
  { year: 2017, value: 31.52 },
  { year: 2018, value: -1.04 },
  { year: 2019, value: 37.96 },
  { year: 2020, value: 47.58 },
  { year: 2021, value: 26.63 },
  { year: 2022, value: -32.97 },
  { year: 2023, value: 53.81 },
  { year: 2024, value: 24.88 },
  { year: 2025, value: 27.0 },
];

const valuations = {
  pe: {
    average: 23.20,
    current: 32.40,
    historyStart: 1986,
    higherCount: 5,
    sampleCount: 40,
  },
  pb: {
    average: 4.10,
    current: 7.50,
    historyStart: 1996,
    higherCount: 1,
    sampleCount: 30,
  },
  updated: "May 29, 2026",
};

valuations.pe.percentile = percentileFromRank(valuations.pe);
valuations.pb.percentile = percentileFromRank(valuations.pb);

const valuationSeries = {
  pb: [
    { year: 1996, value: 5.80 },
    { year: 1997, value: 7.40 },
    { year: 1998, value: 12.80 },
    { year: 1999, value: 19.20 },
    { year: 2000, value: 22.40 },
    { year: 2001, value: 14.50 },
    { year: 2002, value: 8.60 },
    { year: 2003, value: 7.80 },
    { year: 2004, value: 6.40 },
    { year: 2005, value: 5.50 },
    { year: 2006, value: 5.20 },
    { year: 2007, value: 5.80 },
    { year: 2008, value: 3.60 },
    { year: 2009, value: 4.50 },
    { year: 2010, value: 4.10 },
    { year: 2011, value: 3.80 },
    { year: 2012, value: 3.50 },
    { year: 2013, value: 4.20 },
    { year: 2014, value: 4.50 },
    { year: 2015, value: 4.80 },
    { year: 2016, value: 4.60 },
    { year: 2017, value: 5.50 },
    { year: 2018, value: 5.80 },
    { year: 2019, value: 6.40 },
    { year: 2020, value: 8.20 },
    { year: 2021, value: 9.50 },
    { year: 2022, value: 5.80 },
    { year: 2023, value: 6.80 },
    { year: 2024, value: 7.20 },
    { year: 2025, value: 7.40 },
    { year: 2026, value: 7.50 },
  ],
  pe: [
    { year: 1986, value: 14.50 },
    { year: 1990, value: 16.80 },
    { year: 1995, value: 26.50 },
    { year: 1996, value: 28.20 },
    { year: 1997, value: 32.40 },
    { year: 1998, value: 49.50 },
    { year: 1999, value: 78.20 },
    { year: 2000, value: 110.50 },
    { year: 2001, value: 75.40 },
    { year: 2002, value: 38.60 },
    { year: 2003, value: 43.20 },
    { year: 2004, value: 28.90 },
    { year: 2005, value: 24.70 },
    { year: 2006, value: 22.50 },
    { year: 2007, value: 24.80 },
    { year: 2008, value: 16.40 },
    { year: 2009, value: 26.70 },
    { year: 2010, value: 19.80 },
    { year: 2011, value: 16.50 },
    { year: 2012, value: 17.10 },
    { year: 2013, value: 21.00 },
    { year: 2014, value: 22.50 },
    { year: 2015, value: 24.40 },
    { year: 2016, value: 24.80 },
    { year: 2017, value: 28.60 },
    { year: 2018, value: 21.30 },
    { year: 2019, value: 27.40 },
    { year: 2020, value: 36.80 },
    { year: 2021, value: 35.20 },
    { year: 2022, value: 23.60 },
    { year: 2023, value: 30.40 },
    { year: 2024, value: 32.50 },
    { year: 2025, value: 33.00 },
    { year: 2026, value: 32.40 },
  ],
};

const breadthStats = {
  ma50: 56.10,
  ma200: 60.40,
  index: 22510.20,
  updated: "May 29, 2026",
};

const breadthSeries = [
  { year: 2006, ma50: 65, ma200: 70, index: 1756 },
  { year: 2007, ma50: 60, ma200: 72, index: 2084 },
  { year: 2008, ma50: 25, ma200: 28, index: 1212 },
  { year: 2009, ma50: 78, ma200: 75, index: 1860 },
  { year: 2010, ma50: 62, ma200: 68, index: 2218 },
  { year: 2011, ma50: 48, ma200: 52, index: 2277 },
  { year: 2012, ma50: 70, ma200: 65, index: 2660 },
  { year: 2013, ma50: 73, ma200: 78, index: 3592 },
  { year: 2014, ma50: 68, ma200: 70, index: 4236 },
  { year: 2015, ma50: 50, ma200: 55, index: 4593 },
  { year: 2016, ma50: 58, ma200: 60, index: 4863 },
  { year: 2017, ma50: 72, ma200: 78, index: 6396 },
  { year: 2018, ma50: 38, ma200: 42, index: 6329 },
  { year: 2019, ma50: 70, ma200: 73, index: 8733 },
  { year: 2020, ma50: 80, ma200: 75, index: 12888 },
  { year: 2021, ma50: 65, ma200: 78, index: 16320 },
  { year: 2022, ma50: 35, ma200: 38, index: 10939 },
  { year: 2023, ma50: 62, ma200: 60, index: 16825 },
  { year: 2024, ma50: 68, ma200: 65, index: 21012 },
  { year: 2025, ma50: 58, ma200: 60, index: 21500 },
  { year: 2026, ma50: 56.1, ma200: 60.4, index: 22510.2 },
];

const drawdowns = [
  { eventEn: "Dot-Com Bust", eventZh: "互联网泡沫", peak: "2000-03-24", trough: "2002-10-09", months: 31, decline: -82.9 },
  { eventEn: "Global Financial Crisis", eventZh: "全球金融危机", peak: "2007-10-31", trough: "2009-03-09", months: 17, decline: -53.6 },
  { eventEn: "Inflation / Rate Shock", eventZh: "2022加息冲击", peak: "2021-11-19", trough: "2022-12-28", months: 13, decline: -35.1 },
  { eventEn: "1990 Recession Bear", eventZh: "1990衰退熊市", peak: "1990-07-16", trough: "1990-10-11", months: 3, decline: -33.0 },
  { eventEn: "COVID Crash", eventZh: "新冠崩盘", peak: "2020-02-19", trough: "2020-03-23", months: 1, decline: -28.0 },
  { eventEn: "Q4 2018 Selloff", eventZh: "2018Q4 急跌", peak: "2018-08-29", trough: "2018-12-24", months: 4, decline: -23.9 },
  { eventEn: "1998 Russia/LTCM Crisis", eventZh: "1998俄罗斯危机", peak: "1998-07-20", trough: "1998-10-08", months: 3, decline: -29.5 },
  { eventEn: "Black Monday 1987", eventZh: "1987黑色星期一", peak: "1987-08-25", trough: "1987-12-04", months: 3, decline: -31.5 },
];

const metricGroups = [
  {
    titleZh: "估值类",
    titleEn: "Valuation",
    items: [
      { zh: "PE", en: "PE", value: "32.40x", status: "done" },
      { zh: "PB", en: "PB", value: "7.50x", status: "done" },
      { zh: "Forward PE", en: "Forward PE", value: "26.50x", status: "priority" },
      { zh: "PS", en: "Price to Sales", value: "5.45x", status: "todo" },
      { zh: "Dividend Yield", en: "Dividend Yield", value: "0.62%", status: "todo" },
      { zh: "Earnings Yield", en: "Earnings Yield", value: "3.09%", status: "todo" },
    ],
  },
  {
    titleZh: "盈利与基本面",
    titleEn: "Earnings & Fundamentals",
    items: [
      { zh: "EPS", en: "EPS", value: "$695", status: "todo" },
      { zh: "Forward EPS", en: "Forward EPS", value: "$849", status: "todo" },
      { zh: "Profit Margin", en: "Profit Margin", value: "20.4%", status: "todo" },
      { zh: "Revenue Growth", en: "Revenue Growth", value: "11.8%", status: "todo" },
      { zh: "Earnings Growth", en: "Earnings Growth", value: "18.6%", status: "todo" },
    ],
  },
  {
    titleZh: "利率与风险溢价",
    titleEn: "Rates & Risk Premium",
    items: [
      { zh: "10Y Treasury Yield", en: "10Y Treasury Yield", value: "4.45%", status: "priority" },
      { zh: "Real Yield", en: "Real Yield", value: "1.89%", status: "todo" },
      { zh: "Equity Risk Premium", en: "Equity Risk Premium", value: "-1.36%", status: "priority" },
      { zh: "Fed Funds Rate", en: "Fed Funds Rate", value: "3.62%", status: "todo" },
    ],
  },
  {
    titleZh: "价格趋势",
    titleEn: "Price Trend",
    items: [
      { zh: "年度回报", en: "Annual Returns", value: "16.7% avg", status: "done" },
      { zh: "极端回撤", en: "Extreme Drawdowns", value: "-82.9%", status: "done" },
      { zh: "Nasdaq 100 Index Price", en: "Nasdaq 100 Index Price", value: "22510.20", status: "todo" },
      { zh: "200日均线距离", en: "Distance to 200D MA", value: "+12.4%", status: "todo" },
      { zh: "52周高低距离", en: "Distance to 52W High/Low", value: "-2.1% / +42.8%", status: "todo" },
      { zh: "Drawdown Curve", en: "Drawdown Curve", value: "-2.1%", status: "priority" },
      { zh: "Rolling Returns", en: "Rolling Returns", value: "1Y +27.0%", status: "todo" },
    ],
  },
  {
    titleZh: "市场宽度",
    titleEn: "Market Breadth",
    items: [
      { zh: "MA50 / MA200 上方比例", en: "Stocks Above MA50 / MA200", value: "56.10% / 60.40%", status: "done" },
      { zh: "Top 10 Weight", en: "Top 10 Weight", value: "52.6%", status: "todo" },
      { zh: "Mag 7 Weight", en: "Magnificent 7 Weight", value: "44.8%", status: "todo" },
      { zh: "等权/市值加权比", en: "Equal / Cap Weight Ratio", value: "0.74", status: "todo" },
      { zh: "Sector Breadth", en: "Sector Breadth", value: "6/8", status: "todo" },
    ],
  },
  {
    titleZh: "情绪与仓位",
    titleEn: "Sentiment & Positioning",
    items: [
      { zh: "VIX", en: "VIX", value: "14.9", status: "todo" },
      { zh: "VXN", en: "VXN (Nasdaq Volatility)", value: "18.4", status: "priority" },
      { zh: "Put/Call Ratio", en: "Put/Call Ratio", value: "0.77", status: "todo" },
      { zh: "AAII Sentiment", en: "AAII Sentiment", value: "Bull 43.2%", status: "todo" },
      { zh: "QQQ Fund Flow", en: "QQQ Fund Flow", value: "+$8.6B", status: "todo" },
    ],
  },
  {
    titleZh: "宏观环境",
    titleEn: "Macro Environment",
    items: [
      { zh: "ISM PMI", en: "ISM PMI", value: "51.1", status: "todo" },
      { zh: "Unemployment Rate", en: "Unemployment Rate", value: "4.3%", status: "todo" },
      { zh: "Inflation CPI", en: "Inflation CPI", value: "3.8%", status: "todo" },
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
    metricsNote: "已纳入前面提到的全部纳指100指标，并在右侧写入当前值或最近参考值。",
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
    indexLegend: "Nasdaq 100 指数",
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
    metricsNote: "Includes the full Nasdaq 100 metric list discussed earlier, with current or latest reference values.",
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
    indexLegend: "Nasdaq 100 Index",
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
  grid.setAttribute("aria-label", `Annual Nasdaq 100 returns from ${start} to ${end}`);
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
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Nasdaq 100 ${metric.toUpperCase()} historical line chart">
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
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Nasdaq 100 market breadth chart">
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

  drawText(ctx, `纳斯达克100指数${start}-${end}年平均价格回报率为`, width / 2, 48, 32, "#ffffff", 900);
  drawText(ctx, formatPercent(average), width / 2, 94, 42, "#8df2f1", 900);
  drawText(ctx, "Nasdaq 100", width / 2, 210, 112, "#f73348", 900, "Arial Black, Arial");
  drawText(ctx, `RETURNS OVER ${count} ${count === 1 ? "YEAR" : "YEARS"}`, width / 2, 335, 37, "#ffffff", 900);
  drawText(ctx, "The Nasdaq 100 averaged", width / 2, 405, 22, "#ffffff", 800);
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
