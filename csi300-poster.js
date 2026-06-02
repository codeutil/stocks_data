const returns = [
  { year: 2005, value: -7.65 },
  { year: 2006, value: 121.02 },
  { year: 2007, value: 161.55 },
  { year: 2008, value: -65.95 },
  { year: 2009, value: 96.71 },
  { year: 2010, value: -12.51 },
  { year: 2011, value: -25.01 },
  { year: 2012, value: 7.55 },
  { year: 2013, value: -7.65 },
  { year: 2014, value: 51.66 },
  { year: 2015, value: 5.58 },
  { year: 2016, value: -11.28 },
  { year: 2017, value: 21.78 },
  { year: 2018, value: -25.31 },
  { year: 2019, value: 36.07 },
  { year: 2020, value: 27.21 },
  { year: 2021, value: -5.2 },
  { year: 2022, value: -21.63 },
  { year: 2023, value: -11.38 },
  { year: 2024, value: 14.68 },
  { year: 2025, value: 14.6 },
];

const valuations = {
  pe: {
    average: 12.50,
    current: 12.40,
    historyStart: 2005,
    higherCount: 14,
    sampleCount: 21,
  },
  pb: {
    average: 1.70,
    current: 1.39,
    historyStart: 2005,
    higherCount: 11,
    sampleCount: 21,
  },
  updated: "May 29, 2026",
};

valuations.pe.percentile = percentileFromRank(valuations.pe);
valuations.pb.percentile = percentileFromRank(valuations.pb);

const valuationSeries = {
  pb: [
    { year: 2005, value: 1.85 },
    { year: 2006, value: 2.85 },
    { year: 2007, value: 6.30 },
    { year: 2008, value: 2.18 },
    { year: 2009, value: 3.30 },
    { year: 2010, value: 2.55 },
    { year: 2011, value: 1.95 },
    { year: 2012, value: 1.78 },
    { year: 2013, value: 1.55 },
    { year: 2014, value: 1.85 },
    { year: 2015, value: 2.20 },
    { year: 2016, value: 1.75 },
    { year: 2017, value: 1.85 },
    { year: 2018, value: 1.45 },
    { year: 2019, value: 1.65 },
    { year: 2020, value: 1.95 },
    { year: 2021, value: 1.70 },
    { year: 2022, value: 1.40 },
    { year: 2023, value: 1.32 },
    { year: 2024, value: 1.30 },
    { year: 2025, value: 1.36 },
    { year: 2026, value: 1.39 },
  ],
  pe: [
    { year: 2005, value: 13.50 },
    { year: 2006, value: 19.20 },
    { year: 2007, value: 38.70 },
    { year: 2008, value: 13.00 },
    { year: 2009, value: 23.00 },
    { year: 2010, value: 16.80 },
    { year: 2011, value: 11.20 },
    { year: 2012, value: 11.00 },
    { year: 2013, value: 9.80 },
    { year: 2014, value: 11.50 },
    { year: 2015, value: 16.40 },
    { year: 2016, value: 13.60 },
    { year: 2017, value: 14.80 },
    { year: 2018, value: 11.00 },
    { year: 2019, value: 13.60 },
    { year: 2020, value: 17.50 },
    { year: 2021, value: 14.80 },
    { year: 2022, value: 11.60 },
    { year: 2023, value: 11.20 },
    { year: 2024, value: 12.00 },
    { year: 2025, value: 12.60 },
    { year: 2026, value: 12.40 },
  ],
};

const breadthStats = {
  ma50: 51.30,
  ma200: 48.60,
  index: 4035.20,
  updated: "May 29, 2026",
};

const breadthSeries = [
  { year: 2006, ma50: 78, ma200: 82, index: 2041.07 },
  { year: 2007, ma50: 70, ma200: 88, index: 5338.28 },
  { year: 2008, ma50: 18, ma200: 22, index: 1817.72 },
  { year: 2009, ma50: 75, ma200: 70, index: 3575.68 },
  { year: 2010, ma50: 50, ma200: 55, index: 3128.26 },
  { year: 2011, ma50: 35, ma200: 38, index: 2345.74 },
  { year: 2012, ma50: 52, ma200: 48, index: 2522.95 },
  { year: 2013, ma50: 42, ma200: 45, index: 2330.03 },
  { year: 2014, ma50: 70, ma200: 65, index: 3533.71 },
  { year: 2015, ma50: 55, ma200: 58, index: 3731.0 },
  { year: 2016, ma50: 50, ma200: 48, index: 3310.08 },
  { year: 2017, ma50: 60, ma200: 62, index: 4030.85 },
  { year: 2018, ma50: 30, ma200: 35, index: 3010.65 },
  { year: 2019, ma50: 65, ma200: 60, index: 4096.58 },
  { year: 2020, ma50: 70, ma200: 68, index: 5211.29 },
  { year: 2021, ma50: 55, ma200: 58, index: 4940.37 },
  { year: 2022, ma50: 38, ma200: 40, index: 3871.63 },
  { year: 2023, ma50: 45, ma200: 42, index: 3431.11 },
  { year: 2024, ma50: 50, ma200: 48, index: 3934.91 },
  { year: 2025, ma50: 52, ma200: 50, index: 4510.36 },
  { year: 2026, ma50: 51.3, ma200: 48.6, index: 4035.2 },
];

const drawdowns = [
  { eventEn: "2008 Global Financial Crisis", eventZh: "2008金融危机", peak: "2007-10-16", trough: "2008-11-04", months: 13, decline: -73.8 },
  { eventEn: "2015-2016 Stock Crash", eventZh: "2015股灾", peak: "2015-06-12", trough: "2016-02-29", months: 8, decline: -45.3 },
  { eventEn: "2011-2012 European Debt", eventZh: "2011欧债危机", peak: "2011-04-18", trough: "2012-12-04", months: 20, decline: -34.7 },
  { eventEn: "2021-2022 Tightening Cycle", eventZh: "2021-2022紧缩周期", peak: "2021-12-13", trough: "2022-10-31", months: 10, decline: -33.7 },
  { eventEn: "2018 Trade War", eventZh: "2018贸易战", peak: "2018-01-29", trough: "2019-01-04", months: 12, decline: -32.5 },
  { eventEn: "2010 Property Tightening", eventZh: "2010地产调控", peak: "2010-04-12", trough: "2010-07-02", months: 3, decline: -29.7 },
  { eventEn: "2023 Bear Market", eventZh: "2023熊市", peak: "2023-05-08", trough: "2024-02-05", months: 9, decline: -24.5 },
  { eventEn: "2013 Liquidity Squeeze", eventZh: "2013钱荒", peak: "2013-02-06", trough: "2013-06-25", months: 5, decline: -22.4 },
];

const metricGroups = [
  {
    titleZh: "估值类",
    titleEn: "Valuation",
    items: [
      { zh: "PE TTM", en: "PE TTM", value: "12.40x", status: "done" },
      { zh: "PB", en: "PB", value: "1.39x", status: "done" },
      { zh: "PS", en: "Price to Sales", value: "1.45x", status: "todo" },
      { zh: "股息率", en: "Dividend Yield", value: "2.73%", status: "priority" },
      { zh: "ROE", en: "ROE", value: "9.97%", status: "priority" },
      { zh: "PEG", en: "PEG", value: "0.98", status: "todo" },
    ],
  },
  {
    titleZh: "盈利与基本面",
    titleEn: "Earnings & Fundamentals",
    items: [
      { zh: "EPS", en: "EPS", value: "326 CNY", status: "todo" },
      { zh: "盈利增速", en: "Earnings Growth", value: "5.4%", status: "todo" },
      { zh: "营收增速", en: "Revenue Growth", value: "3.1%", status: "todo" },
      { zh: "净利率", en: "Profit Margin", value: "10.6%", status: "todo" },
    ],
  },
  {
    titleZh: "利率与风险溢价",
    titleEn: "Rates & Risk Premium",
    items: [
      { zh: "10Y国债收益率", en: "10Y CGB Yield", value: "1.68%", status: "priority" },
      { zh: "股权风险溢价", en: "Equity Risk Premium", value: "6.40%", status: "priority" },
      { zh: "MLF利率", en: "MLF Rate", value: "2.30%", status: "todo" },
      { zh: "LPR 1Y", en: "LPR 1Y", value: "3.10%", status: "todo" },
    ],
  },
  {
    titleZh: "价格趋势",
    titleEn: "Price Trend",
    items: [
      { zh: "年度回报", en: "Annual Returns", value: "13.7% avg", status: "done" },
      { zh: "极端回撤", en: "Extreme Drawdowns", value: "-73.8%", status: "done" },
      { zh: "沪深300指数", en: "CSI 300 Index Price", value: "4035.20", status: "todo" },
      { zh: "200日均线距离", en: "Distance to 200D MA", value: "+1.6%", status: "todo" },
      { zh: "52周高低距离", en: "Distance to 52W High/Low", value: "-3.2% / +28.4%", status: "todo" },
      { zh: "Drawdown Curve", en: "Drawdown Curve", value: "-3.2%", status: "priority" },
    ],
  },
  {
    titleZh: "市场宽度",
    titleEn: "Market Breadth",
    items: [
      { zh: "MA50/MA200 上方比例", en: "Stocks Above MA50 / MA200", value: "51.30% / 48.60%", status: "done" },
      { zh: "前10权重", en: "Top 10 Weight", value: "21.5%", status: "todo" },
      { zh: "等权/市值加权比", en: "Equal / Cap Weight Ratio", value: "0.86", status: "todo" },
      { zh: "行业宽度", en: "Sector Breadth", value: "7/11", status: "todo" },
      { zh: "北向资金净流", en: "Northbound Flow", value: "-12.4B", status: "todo" },
    ],
  },
  {
    titleZh: "情绪与仓位",
    titleEn: "Sentiment & Positioning",
    items: [
      { zh: "成交额(亿)", en: "Daily Turnover (B)", value: "10,250", status: "todo" },
      { zh: "融资余额", en: "Margin Balance", value: "1.85T", status: "todo" },
      { zh: "新发基金", en: "New Fund Issuance", value: "+82.6B", status: "todo" },
      { zh: "陆股通持仓", en: "Stock Connect Holding", value: "2.18T", status: "todo" },
    ],
  },
  {
    titleZh: "宏观环境",
    titleEn: "Macro Environment",
    items: [
      { zh: "PMI", en: "PMI", value: "50.4", status: "todo" },
      { zh: "CPI", en: "CPI", value: "0.3%", status: "todo" },
      { zh: "PPI", en: "PPI", value: "-2.0%", status: "todo" },
      { zh: "GDP增速", en: "GDP Growth", value: "5.2%", status: "todo" },
      { zh: "M2", en: "M2 Money Supply", value: "315T CNY", status: "todo" },
      { zh: "社融", en: "Total Social Financing", value: "+3.1T", status: "todo" },
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
    metricsNote: "已纳入前面提到的全部沪深300指标，并在右侧写入当前值或最近参考值。",
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
    indexLegend: "沪深300 指数",
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
    metricsNote: "Includes the full CSI 300 metric list discussed earlier, with current or latest reference values.",
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
    indexLegend: "CSI 300 Index",
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
  grid.setAttribute("aria-label", `Annual CSI 300 returns from ${start} to ${end}`);
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
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="CSI 300 ${metric.toUpperCase()} historical line chart">
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
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="CSI 300 market breadth chart">
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
  drawText(ctx, "CSI 300", width / 2, 210, 112, "#f73348", 900, "Arial Black, Arial");
  drawText(ctx, `RETURNS OVER ${count} ${count === 1 ? "YEAR" : "YEARS"}`, width / 2, 335, 37, "#ffffff", 900);
  drawText(ctx, "The CSI 300 averaged", width / 2, 405, 22, "#ffffff", 800);
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
