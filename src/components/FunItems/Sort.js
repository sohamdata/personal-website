import { useState, useEffect } from 'react';
import styles from './styles';

export default function Sort() {
  const [colors, setColors] = useState([]);
  const [selectedAlgo, setSelectedAlgo] = useState('Selection Sort (O(n^2))');
  const [sorting, setSorting] = useState(false);

  useEffect(() => generateColors(100), []);

  const generateColors = n => {
    if (sorting) return;
    const colors_ = [];

    for (let i = 0; i < n; i++) {
      // generate random number in [0, 0xFFFFFF] (color range)
      const num = ~~(Math.random() * (0xffffff + 1));
      colors_.push('#' + num.toString(16).padStart(6, 0));
    }

    setColors(colors_);
  };

  const timer = ms => new Promise(resolve => setTimeout(resolve, ms));

  /**
   *
   * @param {string} color
   */
  const colorToInt = color => {
    const [r, g, b] = [color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)];
    return parseInt(r, 16) + parseInt(g, 16) + parseInt(b, 16);
  };

  // SELECTION SORT
  const selectionSort = async () => {
    setSorting(true);
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
    setSorting(false);
  };

  // BUBBLE SORT
  const bubbleSort = async () => {
    setSorting(true);
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
    setSorting(false);
  };

  // INSERTION SORT
  const insertionSort = async () => {
    setSorting(true);
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
    setSorting(false);
  };

  // QUICK SORT
  const quickSort = async () => {
    setSorting(true);
    const colors_ = [...colors];

    const partition = async (low, high) => {
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

    const quickSortHelper = async (low, high) => {
      if (low < high) {
        const pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      }
    };

    await quickSortHelper(0, colors_.length - 1);
    setSorting(false);
  };

  // MERGE SORT
  const mergeSort = async () => {
    setSorting(true);
    const colors_ = [...colors];

    const merge = async (l, m, r) => {
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

    const mergeSortHelper = async (l, r) => {
      if (l < r) {
        const m = Math.floor((l + r) / 2);
        await mergeSortHelper(l, m);
        await mergeSortHelper(m + 1, r);
        await merge(l, m, r);
      }
    };

    await mergeSortHelper(0, colors_.length - 1);
    setSorting(false);
  };

  // HEAP SORT
  const heapSort = async () => {
    setSorting(true);
    const colors_ = [...colors];

    const heapify = async (n, i) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < n && colorToInt(colors_[left]) > colorToInt(colors_[largest])) {
        largest = left;
      }

      if (right < n && colorToInt(colors_[right]) > colorToInt(colors_[largest])) {
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

    setSorting(false);
  };

  const algos = {
    'Selection Sort (O(n^2))': selectionSort,
    'Bubble Sort (O(n^2))': bubbleSort,
    'Insertion Sort (O(n^2))': insertionSort,
    'Quick Sort (O(nlogn))': quickSort,
    'Merge Sort (O(nlogn))': mergeSort,
    'Heap Sort (O(nlogn))': heapSort,
  };

  return (
    <div style={styles.itemContainer}>
      <header style={styles.itemHeader}>Sorting Visualization</header>
      <br />
      <p style={styles.itemParagraph}>
        Colors are really just hexadecimal values, so they will be sorted as if the colors are numbers.
        <br />
        A way of knowing that the sorting is done is when the colors go from dark to light <br />(kind of fade away)
      </p>
      <br />
      <button style={styles.betButton} onClick={() => generateColors(100)}>
        Randomize
      </button>
      <br />
      <form action="#">
        <label htmlFor="algo" style={styles.itemParagraph}>
          Algorithm:{' '}
        </label>
        <select id="algo" name="algo" style={styles.algoSelect} onChange={(e) => setSelectedAlgo(e.target.value)}>
          {Object.keys(algos).map(algo => (
            <option key={algo} value={algo}>
              {algo}
            </option>
          ))}
        </select>
      </form>
      <br />
      <button
        style={styles.betButton}
        onClick={() => {
          if (!sorting) {
            algos[selectedAlgo]();
          }
        }}
      >
        Sort
      </button>
      <br />
      {colors.map((color, i) => (
        <div key={i} style={{ ...styles.colorCell, backgroundColor: color }} />
      ))}
      <p style={{ ...styles.itemParagraph, fontSize: '0.7rem', fontStyle: 'italic' }}>
        if the Randomize button seems stuck, it (probably) means the sorting is still in progress </p>
    </div>
  );
}
