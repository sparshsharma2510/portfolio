import ConstellationCard from "./ConstellationCard";

const orionStars = [
  { x: "21.4%", y: "33.3%", size: "12px", label: "Betelgeuse" },
  { x: "53.86%", y: "36.94%", size: "10px", label: "Bellatrix" },
  { x: "65.31%", y: "86.95%", size: "13px", label: "Rigel" },
  { x: "29.41%", y: "92%", size: "10px", label: "Saiph" },
  { x: "41.89%", y: "62.89%", size: "10px", label: "Alnilam" },
  { x: "46.43%", y: "59.79%", size: "9px", label: "Mintaka" },
  { x: "42.73%", y: "79.08%", size: "8px", label: "Iota Ori" },
  { x: "92%", y: "34.84%", size: "8px", label: "Pi³ Ori" },
  { x: "90.52%", y: "39.5%", size: "7px", label: "Pi⁴ Ori" },
  { x: "87.23%", y: "50.37%", size: "7px", label: "Pi⁵ Ori" },
];

const orionLines = [
  { x: "21.4%", y: "33.3%", w: "32.66%", r: "6.4deg" },
  { x: "21.4%", y: "33.3%", w: "35.99%", r: "55.3deg" },
  { x: "53.86%", y: "36.94%", w: "28.58%", r: "114.76deg" },
  { x: "41.89%", y: "62.89%", w: "33.58%", r: "45.77deg" },
  { x: "41.89%", y: "62.89%", w: "31.67%", r: "113.21deg" },
  { x: "21.4%", y: "33.3%", w: "59.24%", r: "82.23deg" },
  { x: "53.86%", y: "36.94%", w: "51.3%", r: "77.1deg" },
  { x: "46.43%", y: "59.79%", w: "5.5%", r: "145.67deg" },
  { x: "41.89%", y: "62.89%", w: "16.21%", r: "87.03deg" },
  { x: "92%", y: "34.84%", w: "4.89%", r: "107.62deg" },
  { x: "90.52%", y: "39.5%", w: "11.36%", r: "106.84deg" },
  { x: "53.86%", y: "36.94%", w: "35.97%", r: "21.92deg" },
];

const ursaMajorStars = [
  { x: "51.37%", y: "8%", size: "12px", label: "Dubhe" },
  { x: "51.87%", y: "30.27%", size: "10px", label: "Merak" },
  { x: "38.11%", y: "41.42%", size: "10px", label: "Phecda" },
  { x: "32.39%", y: "27.57%", size: "8px", label: "Megrez" },
  { x: "22.17%", y: "32.02%", size: "12px", label: "Alioth" },
  { x: "14.25%", y: "36.31%", size: "10px", label: "Mizar" },
  { x: "8%", y: "59.59%", size: "12px", label: "Alkaid" },
  { x: "49.8%", y: "79.56%", size: "8px", label: "Psi UMa" },
  { x: "63.72%", y: "86.13%", size: "8px", label: "Tania Borealis" },
  { x: "62.33%", y: "92%", size: "8px", label: "Tania Australis" },
  { x: "84.34%", y: "64.86%", size: "8px", label: "Talitha" },
  { x: "75.43%", y: "49.78%", size: "8px", label: "Theta UMa" },
  { x: "92%", y: "12.28%", size: "7px", label: "Muscida" },
];

const ursaMajorLines = [
  { x: "51.37%", y: "8%", w: "22.28%", r: "88.71deg" },
  { x: "51.87%", y: "30.27%", w: "17.71%", r: "140.98deg" },
  { x: "38.11%", y: "41.42%", w: "14.98%", r: "-112.44deg" },
  { x: "32.39%", y: "27.57%", w: "27.26%", r: "-45.88deg" },
  { x: "32.39%", y: "27.57%", w: "11.15%", r: "156.47deg" },
  { x: "22.17%", y: "32.02%", w: "9.01%", r: "151.56deg" },
  { x: "14.25%", y: "36.31%", w: "24.1%", r: "105.03deg" },
  { x: "51.87%", y: "30.27%", w: "49.33%", r: "92.4deg" },
  { x: "49.8%", y: "79.56%", w: "15.39%", r: "25.27deg" },
  { x: "63.72%", y: "86.13%", w: "6.03%", r: "103.32deg" },
  { x: "75.43%", y: "49.78%", w: "17.52%", r: "59.42deg" },
  { x: "84.34%", y: "64.86%", w: "53.14%", r: "-81.71deg" },
];

const aquariusStars = [
  { x: "49.75%", y: "14.32%", size: "11px", label: "Sadalmelik" },
  { x: "68.26%", y: "33.88%", size: "11px", label: "Sadalsuud" },
  { x: "41.17%", y: "18.3%", size: "9px", label: "Sadachbia" },
  { x: "92%", y: "48.5%", size: "9px", label: "Albali" },
  { x: "43.77%", y: "42.12%", size: "8px", label: "Ancha" },
  { x: "24.42%", y: "41.37%", size: "8px", label: "Lambda Aqr" },
  { x: "23.32%", y: "72.06%", size: "9px", label: "Skat" },
  { x: "26.05%", y: "63.76%", size: "7px", label: "Tau Aqr" },
  { x: "15.32%", y: "92%", size: "7px", label: "88 Aqr" },
  { x: "8%", y: "88.01%", size: "7px", label: "98 Aqr" },
  { x: "12.68%", y: "35.66%", size: "7px", label: "Phi Aqr" },
  { x: "33.75%", y: "13.57%", size: "7px", label: "Eta Aqr" },
  { x: "39.21%", y: "8%", size: "6px", label: "Pi Aqr" },
];

const aquariusLines = [
  { x: "49.75%", y: "14.32%", w: "9.46%", r: "155.11deg" },
  { x: "41.17%", y: "18.3%", w: "8.8%", r: "-147.48deg" },
  { x: "41.17%", y: "18.3%", w: "31.25%", r: "29.9deg" },
  { x: "68.26%", y: "33.88%", w: "25.84%", r: "161.4deg" },
  { x: "43.77%", y: "42.12%", w: "19.36%", r: "-177.78deg" },
  { x: "24.42%", y: "41.37%", w: "30.71%", r: "92.05deg" },
  { x: "23.32%", y: "72.06%", w: "8.74%", r: "-71.79deg" },
  { x: "26.05%", y: "63.76%", w: "30.21%", r: "110.8deg" },
  { x: "15.32%", y: "92%", w: "8.34%", r: "-151.41deg" },
  { x: "12.68%", y: "35.66%", w: "13.05%", r: "25.94deg" },
  { x: "39.21%", y: "8%", w: "12.29%", r: "30.95deg" },
  { x: "92%", y: "48.5%", w: "27.88%", r: "-148.37deg" },
];

const ConstellationCards = () => {
  return (
    <div className="constellation-cards-container">
      <ConstellationCard
        title="Orion"
        stars={orionStars}
        lines={orionLines}
        className="constellation-orion"
      />
      <ConstellationCard
        title="Ursa Major"
        stars={ursaMajorStars}
        lines={ursaMajorLines}
        className="constellation-ursa"
      />
      <ConstellationCard
        title="Aquarius"
        stars={aquariusStars}
        lines={aquariusLines}
        className="constellation-aquarius"
      />
    </div>
  );
};

export default ConstellationCards;
