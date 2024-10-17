import { createContext, useContext, useState } from "react";

const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const CustomizationContext = createContext<{
  material: string;
  setMaterial: (material: string) => void;
  legs: number;
  setLegs: (legs: number) => void;
  chairColors: { color: string; name: string }[];
  chairColor: { color: string; name: string };
  setChairColor: (color: { color: string; name: string }) => void;
  cushionColors: { color: string; name: string }[];
  cushionColor: { color: string; name: string };
  setCushionColor: (color: { color: string; name: string }) => void;
}>({
  material: "leather",
  setMaterial: () => {},
  legs: 1,
  setLegs: () => {},
  chairColors,
  chairColor: chairColors[0],
  setChairColor: () => {},
  cushionColors,
  cushionColor: cushionColors[0],
  setCushionColor: () => {},
});

export const CustomizationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColors,
        chairColor,
        setChairColor,
        cushionColors,
        cushionColor,
        setCushionColor,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => useContext(CustomizationContext);
