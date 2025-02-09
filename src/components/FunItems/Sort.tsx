import { useState, useEffect } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IoGolf } from "react-icons/io5";
import LinkButton from "../LinkButton";

const timer = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type SortingAlgorithm =
  | "Selection Sort"
  | "Bubble Sort"
  | "Insertion Sort"
  | "Quick Sort"
  | "Merge Sort"
  | "Heap Sort";

export default function Sort() {
  const [colors, setColors] = useState<string[]>([]);
  const [selectedAlgo, setSelectedAlgo] =
    useState<SortingAlgorithm>("Selection Sort");
  const [sorting, setSorting] = useState<boolean>(false);

  useEffect(() => {
    generateColors(100);
  }, []);

  const generateColors = (n: number) => {
    if (sorting) return;
    const newColors = Array.from({ length: n }, () => {
      const num = Math.floor(Math.random() * 0xffffff);
      return `#${num.toString(16).padStart(6, "0")}`;
    });
    setColors(newColors);
  };

  const colorToInt = (color: string): number => {
    const [r, g, b] = [color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)];
    return parseInt(r, 16) + parseInt(g, 16) + parseInt(b, 16);
  };

  // SELECTION SORT
  const selectionSort = async () => {
    const colors_ = [...colors];

    for (let i = 0; i < colors_.length; i++) {
      let min = i;
      for (let j = i + 1; j < colors_.length; j++) {
        if (colorToInt(colors_[j]) < colorToInt(colors_[min])) {
          min = j;
        }
      }
      [colors_[i], colors_[min]] = [colors_[min], colors_[i]];
      setColors([...colors_]);
      await timer(100);
    }
  };

  // BUBBLE SORT
  const bubbleSort = async () => {
    const colors_ = [...colors];

    while (true) {
      let swapped = false;
      for (let i = 0; i < colors_.length - 1; i++) {
        if (colorToInt(colors_[i]) > colorToInt(colors_[i + 1])) {
          [colors_[i], colors_[i + 1]] = [colors_[i + 1], colors_[i]];
          swapped = true;
          setColors([...colors_]);
          await timer(1);
        }
      }
      if (!swapped) break;
    }
  };

  // INSERTION SORT
  const insertionSort = async () => {
    const colors_ = [...colors];

    for (let i = 1; i < colors_.length; i++) {
      const key = colors_[i];
      let j = i - 1;
      while (j >= 0 && colorToInt(key) < colorToInt(colors_[j])) {
        colors_[j + 1] = colors_[j];
        j--;
        setColors([...colors_]);
        await timer(1);
      }
      colors_[j + 1] = key;
    }
  };

  // QUICK SORT
  const quickSort = async () => {
    const colors_ = [...colors];

    const partition = async (low: any, high: any) => {
      const pivot = colors_[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (colorToInt(colors_[j]) < colorToInt(pivot)) {
          i++;
          [colors_[i], colors_[j]] = [colors_[j], colors_[i]];
          setColors([...colors_]);
          await timer(1);
        }
      }
      [colors_[i + 1], colors_[high]] = [colors_[high], colors_[i + 1]];
      setColors([...colors_]);
      await timer(1);
      return i + 1;
    };

    const quickSortHelper = async (low: any, high: any) => {
      if (low < high) {
        const pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      }
    };

    await quickSortHelper(0, colors_.length - 1);
  };

  // MERGE SORT
  const mergeSort = async () => {
    const colors_ = [...colors];

    const merge = async (l: any, m: any, r: any) => {
      const leftArray = colors_.slice(l, m + 1);
      const rightArray = colors_.slice(m + 1, r + 1);
      let i = 0,
        j = 0,
        k = l;
      while (i < leftArray.length && j < rightArray.length) {
        if (colorToInt(leftArray[i]) <= colorToInt(rightArray[j])) {
          colors_[k] = leftArray[i];
          i++;
        } else {
          colors_[k] = rightArray[j];
          j++;
        }
        setColors([...colors_]);
        await timer(10);
        k++;
      }

      while (i < leftArray.length) {
        colors_[k] = leftArray[i];
        i++;
        k++;
        setColors([...colors_]);
        await timer(10);
      }

      while (j < rightArray.length) {
        colors_[k] = rightArray[j];
        j++;
        k++;
        setColors([...colors_]);
        await timer(10);
      }
    };

    const mergeSortHelper = async (l: any, r: any) => {
      if (l < r) {
        const m = Math.floor((l + r) / 2);
        await mergeSortHelper(l, m);
        await mergeSortHelper(m + 1, r);
        await merge(l, m, r);
      }
    };

    await mergeSortHelper(0, colors_.length - 1);
  };

  // HEAP SORT
  const heapSort = async () => {
    const colors_ = [...colors];

    const heapify = async (n: any, i: any) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (
        left < n &&
        colorToInt(colors_[left]) > colorToInt(colors_[largest])
      ) {
        largest = left;
      }

      if (
        right < n &&
        colorToInt(colors_[right]) > colorToInt(colors_[largest])
      ) {
        largest = right;
      }

      if (largest !== i) {
        [colors_[i], colors_[largest]] = [colors_[largest], colors_[i]];
        setColors([...colors_]);
        await timer(1);
        await heapify(n, largest);
      }
    };

    for (let i = Math.floor(colors_.length / 2) - 1; i >= 0; i--) {
      await heapify(colors_.length, i);
    }

    for (let i = colors_.length - 1; i > 0; i--) {
      [colors_[0], colors_[i]] = [colors_[i], colors_[0]];
      setColors([...colors_]);
      await timer(1);
      await heapify(i, 0);
    }
  };

  const algorithms: Record<SortingAlgorithm, () => Promise<void>> = {
    "Selection Sort": selectionSort,
    "Bubble Sort": bubbleSort,
    "Insertion Sort": insertionSort,
    "Quick Sort": quickSort,
    "Merge Sort": mergeSort,
    "Heap Sort": heapSort,
  };

  const onSort = async () => {
    if (sorting) return;
    setSorting(true);
    await algorithms[selectedAlgo]();
    setSorting(false);
  };

  return (
    <div className="my-4 p-6 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg">
      <h1 className="text-xl font-bold text-white">Sorting Visualization</h1>
      <p className="text-white mt-2 text-sm">
        Sorting colors based on their brightness
      </p>

      <div className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center">
        <LinkButton
          onClick={() => generateColors(100)}
          disabled={sorting}
          icon={<GiPerspectiveDiceSixFacesRandom className="text-xl" />}
          text="Randomize"
        />

        <select
          className="px-6 py-3.5 border-none text-gray-900 text-sm rounded-lg bg-gray-900 text-white font-bold"
          value={selectedAlgo}
          onChange={(e) => setSelectedAlgo(e.target.value as SortingAlgorithm)}
        >
          {Object.keys(algorithms).map((algo) => (
            <option key={algo} value={algo}>
              {algo}
            </option>
          ))}
        </select>

        <LinkButton
          onClick={onSort}
          disabled={sorting}
          icon={<IoGolf className="text-xl" />}
          text="Sort"
        />
      </div>

      <div className="flex flex-wrap mt-6">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-sm m-1"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
