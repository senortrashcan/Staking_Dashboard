// Function to fetch data from the API
async function fetchSolanaData() {
  try {
    const response = await fetch('https://api.coincap.io/v2/assets/solana/history?interval=m15');
    const data = await response.json();

    return data.data.map(entry => ({
      date: new Date(entry.date).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit'}),
      price: parseFloat(parseFloat(entry.priceUsd).toFixed(2))
    }));
  } catch (error) {
    console.error('Error fetching Solana data:', error);
    return [];
  }
}

// Function to generate chart data with the last 10 data points
async function generateChartData() {
  const solanaData = await fetchSolanaData();
  const last10Data = solanaData.slice(-10);

  return {
    labels: last10Data.map(entry => entry.date),
    datasets: [
      {
        label: "Price",
        fill: true,
        backgroundColor: "rgba(29,140,248,0.2)",
        borderColor: "#1f8ef1",
        borderWidth: 2,
        data: last10Data.map(entry => entry.price),
      }
    ]
  };
}

let chart1_2_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: {
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.0)",
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 80,
        suggestedMax: 180,
        padding: 20,
        fontColor: "#9a9a9a",
      },
    },
    xAxes: {
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.1)",
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9a9a9a",
      },
    },
  },
};

const chartExample1 = {
  data: generateChartData,
  options: chart1_2_options,
};

// Repeat for chartExample2, chartExample3, and chartExample4

module.exports = {
  chartExample1,
};
