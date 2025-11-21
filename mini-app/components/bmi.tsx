"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

export default function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const handleCalculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!isNaN(h) && !isNaN(w) && h > 0) {
      const bmiValue = w / ((h / 100) ** 2);
      setBmi(bmiValue);
    } else {
      setBmi(null);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Body Mass Index Calculator</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="height" className="text-sm font-medium">
            Height (cm)
          </label>
          <Input
            id="height"
            type="number"
            placeholder="e.g., 170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="weight" className="text-sm font-medium">
            Weight (kg)
          </label>
          <Input
            id="weight"
            type="number"
            placeholder="e.g., 65"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <Button onClick={handleCalculate} className="w-full">
          Calculate BMI
        </Button>
        {bmi !== null && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">
              Your BMI: {bmi.toFixed(2)}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
