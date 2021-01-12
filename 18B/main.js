const test_lines = [
  "2 * 3 + (4 * 5)",
  "5 + (8 * 3 + 9 + 3 * 4 * 3)",
  "5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))",
  "((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"
]

const puzzle_lines = [
  "4 * ((9 + 9 * 5 + 5) + 3)",
  "4 + 5 * (3 + 4 * 3 * 8 * 4 + (5 * 4 + 8)) * 6",
  "3 * (6 + (6 * 9 * 9) + (3 + 7 * 9 + 8 * 9) * 3 * 7) + 5 + 2 * (3 + 9 * 9)",
  "((2 + 4) + 7) * (8 * 6 + 9 * (9 + 7 * 3 + 9 + 6) + (8 * 9 + 2 + 8)) * 2 + 9",
  "2 + ((8 + 3 + 6 + 6 * 7 * 8) * 3 * (6 + 4 * 3 + 5 * 8 * 8)) + 2 + (8 * 2 * 3) + (3 * 4 * 5 + 4) + 5",
  "8 * 7 + (3 + 4) + (9 + 3 + 3 + 3 * 6 * 9)",
  "(2 + 3 + 9 + 7 * (2 + 9 + 3 * 9) * (3 * 8 + 9 + 3 + 9 + 5)) * 8 + (2 + 5 + 5) + 9 * 3",
  "6 * 3 * 7 * 7 + (5 * 5)",
  "2 * (7 * 3 * 6 + 7 * (4 * 2 + 7)) * 5 * 3 + 2",
  "6 * 7 + 8 + (6 + (4 * 9 + 9 * 2 * 7) + (9 + 7 + 2))",
  "6 * 5 + 9 * 7 + 7 * (8 + 6 * 8 + (3 + 6 + 2 + 5 + 9 * 8) + 3 + 4)",
  "(6 * 9 + (6 + 5 + 5 + 6)) + 6 + 7 * 4 + 6",
  "9 * (2 * (9 * 8 + 2) * 3 * 6 * 2) + (4 + (5 + 6 + 8 + 8 * 7 + 7) * 5 + 4) * 7 + 2 * 7",
  "(6 + 6 * (2 + 2 + 2) + 8) * (9 * 7 + 7 * 3 * 4) * 5 * 2 * 7",
  "2 * 2 * (3 + 2) + 7 + 2",
  "(9 * 3 + 7) * 5",
  "5 * ((6 * 2) + 3 + 5 * 9 + (8 * 9 + 4 + 3))",
  "3 * (2 * 7 * 4 + 7 + 4) + 9 * 3 + 8",
  "4 + 5 * 6 + (6 * 8 * 5 * 8) + 7 + 4",
  "9 * 2 * (3 + (7 * 7) * 6) * 7 + 4",
  "8 * 4 * (7 + (5 + 4) * 5 + 3 + 5 * 6) + 6",
  "(7 * 3 * 9 + 7 + 4) * (7 + 9 + 7 * 8) * 5 + 2 + 6",
  "((5 * 7 + 9 + 3 + 3 + 8) + (3 + 3 + 5 + 8 + 6 + 9) + 6 + 8 + 4) * (9 + 4 * 9 * 4)",
  "9 * 5 + 2 * (8 * 9)",
  "(8 + 8 + 2 * 5 * 7 + 2) * 6 * 3 + 5 * (7 + 3 * (2 * 2))",
  "((9 * 7) * 7 * 3 + 9 * (3 + 4) + (8 + 8 + 7 + 2 + 6)) + 3",
  "((5 + 2 + 3 * 2) + 9 + 9) + 2",
  "3 * 8 + (2 + 8 + (6 * 5 * 8) + 7 + 5 * (3 * 4 * 5 * 6)) + 5 * 5",
  "8 * 8 + 2 + (9 + (4 * 3 * 6 * 2 + 7 * 7) + 8 + 8 + 8 + 4) + 7",
  "3 + (9 * (8 * 9 * 5) * 8 + 4 + 7 * 8) + 9 * 5 + 3",
  "((5 * 8 + 8 * 2) * (6 * 9 * 4 * 5 + 6 * 7) + 8) * 6 * 2",
  "7 + 5 + 9 * 8 + (2 + 5 + 5 + 4) * 7",
  "7 * 7 * (3 * 3 * (5 + 3 + 2 + 8) + 4 + 5)",
  "(9 + 3) * (9 * 5 + 5 + (6 + 6 + 6 + 5 + 6 + 7) * 4) + 7 + 6 + 5 * 4",
  "(6 + 4 + 3) * 5 * 5",
  "9 * 6 * (6 + (3 * 6 + 9 + 2 * 4 + 6) * (8 * 7) + 8 + 4 * 9) + 3",
  "8 * 9 * 2",
  "5 * ((8 * 6 * 3) * 8 * (9 + 8 + 7 + 4 * 2) * 2 * 6) * 4",
  "(3 + 7) + 4 + (3 + 3 + 5) + 8 * (8 + 6 + (6 * 7 * 7 * 8 * 9 + 4))",
  "3 * (8 + 7 * (3 * 5 + 6 * 7 * 2 + 2)) * 3 + 7 * 8",
  "((5 * 4 + 9 * 7 * 8 + 6) * 4) + 3",
  "2 * 9 * 9 + 4 * (4 * 6 + 9 * (5 * 6) + 6 + 5)",
  "(6 + (7 * 8 * 8 + 7 + 3) + 9 * (3 + 6 + 9 * 8 * 8 + 7) * 6) * 2 * 6",
  "(7 + 5 * 3) * 8 + 6 * (4 * 9)",
  "8 + ((7 + 5 * 3 * 9 + 2 + 2) * (9 * 9 * 6 * 3 * 5)) * 5 + 2 + 4 * 3",
  "7 * 5 * 2 + (9 + 5 + 7 + 4 + 8 + 5) * 3",
  "3 * (3 + 7 + 2 * 8 * 4)",
  "((8 * 5 + 4 * 4) + (6 + 5 * 3 * 5 * 3) * (2 * 7) + (9 + 8 + 3 + 9 + 9 + 6)) * (6 + 9 * 3 + 4 * (7 * 2)) * 5 * 6",
  "(5 + 4 + 4 * (9 * 2 + 8 + 7 * 9) * (2 * 3 + 3 * 6 + 8) * 7) * 9 + 5",
  "9 + 4 + 7 + 6 * 9 + 9",
  "7 + 7 * 5 * (7 * 2 * 2 * 8 + 5) + 6 * 7",
  "5 + (3 * 6 + (7 + 3) * (9 + 5 + 7 + 2 + 6)) * 4",
  "6 * (9 + 7) * 6 * (5 + 6 * 9) + 9 * ((6 * 7) + 7 * 5 + 3 + (9 + 6 + 2 * 5))",
  "6 * 3 + ((7 * 8 + 7 + 3) * (5 + 8 * 9 * 9))",
  "((8 + 9 * 7 + 9 + 5) + (7 + 2) + (5 + 2 + 9 + 9) + 3 + 9) + 9 + 7 * 9",
  "5 + (9 + 6 + 8 * 2 * 3) * 9",
  "(3 * 7 * 5 + (2 + 9) * 3) + 9",
  "6 + 9 + 5 * 9",
  "(5 * 9 + 7) * (9 + 8 * (7 + 7 * 8 + 6 + 3) + 3) * 3 + 7",
  "9 * 9 + 9 * 7 + 9 + 6",
  "((6 * 4 + 8 + 8 + 8) + 9 + (3 * 3 + 2 * 4) + 5) * 9 * 2 * (9 + 7 + (7 * 5) + 9 + 8)",
  "5 * 6 * 3 + 8",
  "4 + 2 * (7 * (4 + 7 * 7 * 2 * 2 * 4) + (7 * 2 * 4 + 8 * 4 * 4) + 3 + 5 + 4) + 5",
  "5 + 8 + (2 + 4) + ((6 + 3 + 4 * 5 + 6) * 4 * 2 + (6 + 5 * 6 + 3 * 4)) * 8",
  "4 + 6 * 6 * (6 + 5 * (4 * 5 * 7 * 3 + 3 + 2) * 8 + 8 * 5)",
  "6 * 2 + 7",
  "7 * 8 + 9",
  "9 + (9 * 6 + 2 + (3 + 2 + 9 * 3)) + 2",
  "7 * 2 * 9 + (2 * 6) + (4 + (6 * 3 * 7 * 7 * 8 + 6) + (2 + 4 + 3 * 2 + 4) * 5) * 2",
  "3 * ((5 * 2) + 8) * 9 + 3 + 2",
  "(9 + 5 * 7 * (9 + 9) * 4 + (4 + 7)) + 7 * (7 + 7 + 3 * 6) * 2 * (5 + 8) + 5",
  "7 * 5 * 6 + 8 + 6 + 7",
  "3 * 8 + 5 * (8 + 8 * 2 + 5 + 5 * 5) * (6 + 2 + (7 + 9 + 9 + 7)) + 2",
  "((2 + 9 + 8 + 4 * 7 + 2) + 2 * 3 * 2 * 9) * 9 + 2 + 6 * ((6 + 8) * 4 * 5 * 3)",
  "4 + 9 + (3 * (3 + 5 * 2 * 6 + 3) + (8 * 7 * 7 + 2)) * 6",
  "(5 + 2 + 4 + 3 * 9 * 3) + 2 * 6",
  "(4 + 9 * 8 * 4 * (6 * 4 + 7 + 4) + (9 * 8 * 4)) * 8",
  "((4 + 3 * 9) * 9 * 5) * 3 * 3",
  "8 * (4 * 5 + (4 * 9 * 8 * 9 + 4 + 9) + 8 * 4 * (4 * 9 + 7 + 2 + 5 + 6)) + 3 * 7 + 3 + 3",
  "2 * 9 * 6 + ((9 + 7 + 2) + (4 + 8) + 9 * (5 * 7 * 2) + 2 + (9 * 4)) * 6",
  "5 + (2 + 6) + 2",
  "7 + (3 * 6 + 2) * (7 + 5 + 6 + (5 * 6 + 7 * 3 + 9 * 9) + 7 * 6)",
  "3 * ((8 * 8 * 5 * 8 * 2) * 3 * (3 + 5)) + 2 + 8",
  "5 * (5 * 6 + 4 * 3 * 2) * (8 * 6 * 5 * 3 + 3 * (5 + 9 + 9 + 7 + 9))",
  "7 + (9 + 5 + 3 * 8 * 2 * 9) * (8 + 7) * 7",
  "3 * 2 + 7 + 7 + (6 + 7) * 8",
  "9 + (7 + 8 * 8 * 5 * 9) * (3 + 5 + (8 + 7 + 2 * 9) + 6 + 5 * 3) * (8 * 7 + 5 * (7 * 3 + 4 * 2)) + 6",
  "(8 * (4 * 7 + 6 * 3 * 6) + 3 * 4 + 8 + 2) * 3 * ((5 * 2 + 8) + 3 + 8) * 3 + 2",
  "7 + 9 * 9 + 9 + ((8 + 7 * 8 * 7 * 3) * 4 + 3 + 3 * 5 * 3)",
  "3 * 8 + (5 * 6 * 7 + 7) + 8",
  "3 + ((5 * 3) * (6 + 6 + 4 * 2 * 3) + 7 + 3 + 2) + 7 * 3 * 9 * 2",
  "(6 + (8 * 2 + 7 + 9 * 3) + (5 + 4 * 9 + 7 * 2 + 7) + 4 + 9 + 3) + 3 + 7",
  "9 * (4 * (2 + 4 * 5 * 2 * 8 * 3) + 6 * 8) * 7",
  "(7 + (9 + 5 * 5 + 6 + 3) * 6 * 3 * 8) * 9 + (5 + 5) * (7 + 3 * 8 + (3 * 7 * 4) + 4) + 9",
  "2 + 6 + 3 + 9 + 6 + (3 * 2 + 3)",
  "(4 + 5 * 6 + 3) * (2 * 5 + (6 + 9) * 4)",
  "6 * 3 * 7 + (8 + 9) + 5 * (3 + 5 * 8 + 5 * 9)",
  "(8 + 6 + 9 + 6 + 7) + 3 * 7",
  "((2 * 7) + 8 * (2 * 4 + 2 + 9)) + (9 * (9 * 2 * 5) + 8) * ((7 + 2 + 3 * 3) + 4) + (5 + 4 + 5 + 8 * 8 + 7) * 9 + 8",
  "((9 + 4 + 2 + 9) + 3 + 8 + (6 * 2 + 2 + 6 * 2 * 6) + 6) * 2",
  "6 + 4 + 3 * 6 + 8",
  "4 * 7 + 5",
  "(3 + (7 + 8 + 7 * 7) * 4) + (9 * 6 * 6 + 9) + ((3 * 3 * 2 * 9 * 3 + 7) + 3 * (5 + 4 + 9 * 8 * 7) + (4 + 7 + 9 + 9) * 8 + 3)",
  "(7 + 7) + 2 * 9",
  "(3 * 3 * 9 + 4) * 4 + 9 + 5",
  "(7 * (5 * 6 * 3 + 8 * 8 * 6) * 4) + (4 * 4) + (9 + 4) + (5 * (7 + 8 + 8)) * 9 * 8",
  "(6 * 2 + 5 * 5 * 5) * (3 * (7 * 9 * 6) + (2 * 7) + 3 + 9) * 6 + 7 * 3",
  "7 + (9 * 2 + 4 + 5 + 2) + 2 * ((7 * 9) + 6 * (9 * 2 + 9 * 8 * 5))",
  "(6 + 4) + 5 * 3 + 6",
  "9 + 2 + 9 * (6 * 7 * 3)",
  "3 * 6 + 8 + (6 * 4 * 9) + 2 * 5",
  "3 * (7 + 2 * 8 + (4 * 7) + 3) + (3 + 4 * 3 * 4 * 7) + 5",
  "7 + 7 + 5 * (2 * 9 * 2) * 8",
  "6 + (9 + 9 + (3 * 8 * 2 + 8) * 4 * 8 + 8)",
  "6 * (3 + (3 + 7) * 8 * (5 + 8) * 7) + 8 + 6",
  "9 + 2 * 3 * 4 + (7 * 3 * (7 * 7 * 6 * 4 + 6) * 6 * (8 + 8 + 9 + 6 * 2 + 4))",
  "2 * 3 + (3 + 6 * 8 + 9 * (5 + 6) + 4)",
  "(2 + (3 + 5 * 7 + 5 + 4)) + 2 * 4 * 4",
  "(3 + 4) + ((4 * 7 + 8) + 8) + 5 * (9 + 5 * (4 * 8 + 9 + 6 * 8)) + 8",
  "(7 + 5 + 2 * 2 * 6 * 2) * (4 * (5 + 7 + 9 + 4 * 2 * 6) + 2 * 3 + (8 + 8 * 2 * 2 * 3))",
  "5 + (3 * 2 * 9 + 4) + 8 + 9 + 2",
  "5 + 3 + ((6 * 3) * 3 * 5 + 4 * (7 + 8 + 3 + 3))",
  "9 * ((9 + 9 + 7 + 5 + 7 * 9) * 5 * 9 * 4)",
  "8 + (2 * 2 * 2) * 4",
  "3 + ((8 * 9 + 3 * 3 * 3) + 6 * 8 * (4 * 6 + 7 + 6) + (8 + 2 * 6 + 4 + 7) + 7) + 3 + 8",
  "(6 * (4 * 4) * 4) + 3",
  "(6 + 5 + 9 * 8 * 4 * 6) + (5 + 6 * 4 * 5) + 6 + (5 * 4 + 8 * 9)",
  "((8 + 8 + 5 * 6 * 4 + 6) * (2 + 8 + 6 + 3 + 5) * (6 * 7) + (8 * 2 * 2 * 3 + 7 + 5) + 7 * 7) + 3 + 8 * 4 * 5 + 3",
  "2 + (4 * 9 + (4 * 2 + 3) + 9 * 3) + 5 * 7 * 8 * 2",
  "8 + 3 + (2 + 5 * 2 * 7 * 3 * 2) + 7 + 6",
  "5 * 2 * ((4 * 8 * 7 * 7) * 7 + 9 * (4 + 9 + 8 * 6) * 2 + 2) + 7 * 6 * 4",
  "3 + 8 * 7 * (9 * 5 + 8 * 2 * 5 * (6 * 3 + 9))",
  "8 + 9 + ((5 * 7 + 2 + 4 * 5) * (6 * 7 * 8) + 4 + 3 * 2) * 7 + (6 * (3 + 8 + 5 * 5 + 5 * 2) * 5 + 8)",
  "4 + (3 + 6 + 3) + 4 + 2 * 9",
  "(5 + 5) + 8 * 6 + (5 + 5)",
  "7 * 8 * 2 + 2 * ((4 + 9 + 6 * 9 + 9 + 2) * (8 * 2 * 3 + 3 + 2 * 4) + 8 + (4 * 6 + 8) * 4 + (4 * 8 + 2 + 4))",
  "5 * 9 + 7 * 9 + (2 * 7 * (6 * 5) + 7 + 6) * 7",
  "4 + 9 + 8 * ((8 + 4 + 7 * 8) * 8) + 4 + 9",
  "4 * (2 + 3) * (7 + 7 * (5 + 2 + 8) + 2)",
  "(3 + (3 * 7 + 7) * 3) + 6 * 9 + 2 + 6 + 3",
  "(3 + (2 * 5 + 6 * 4) + 3) + ((2 * 2 + 8 + 7 * 5 + 5) * 8 + 5 + (9 * 4)) * 8",
  "4 * 7 * 6 + 9",
  "(6 * 7) + 6 + 3 + 3 * 3",
  "8 + 7 * 9 + 9 + 3 + (7 * 3 * 3 * 7)",
  "8 * 7 * 4",
  "6 + 3 + (3 + 3 + 8 * (2 + 4 * 8 + 3))",
  "9 * 7 * (5 * 3 + (8 * 2) + 3) * 4 * 5 + 4",
  "(3 * 3 * (3 + 4 + 4 * 8)) * (5 + (9 + 9) + 2 + 3 * (9 + 4 + 6 + 3)) + 6 * 7",
  "(6 + (6 * 7 * 3) + 2 + (2 + 4 * 9 + 9)) + 5 * 9 + (7 + 2 + 3 * 9 * 9)",
  "2 * 9 * 7 * 8",
  "4 + 5 + 2 + 6 + (4 + 7 + 3 * 6 + 2)",
  "(9 + 4 + 8) + (2 * 3 + 5 + 3) + 3",
  "6 * ((6 + 3 + 6 * 6 * 2 + 3) + (5 + 4 * 9 * 8 * 4 + 2) * (2 * 4 * 5) + 3) + 9 * 2 + ((6 * 9 + 6) + 3) + 5",
  "(6 + (7 * 8) + 8) * 2 + 2 + 5 + (3 + 2 * 8)",
  "(4 * 5 * 5 * 9 + 4 + (5 * 5 * 7 * 2 * 5 + 8)) + 8",
  "3 + 4 + 5 + (7 * 8 + (8 * 7 * 4) + 5 * 8 + (8 + 5 + 8 + 9 * 7 * 2)) * 7",
  "4 * 7 + 2 + 8 * ((4 + 7 * 3) + 7 + 2 + 9 + 8) + 5",
  "9 + 3",
  "6 + 5 + (3 + 3 * 3 * 3) + 4 * 2",
  "((9 * 4 * 6 + 4 * 6) + 4 * (9 * 8 * 6) + 4 * (9 * 4 + 8 * 7 * 3 + 3) * 4) + 7 + 9",
  "2 + (6 + 9 + 6 * 6 * 4 * 2) * 4 * 2 * 7",
  "4 + 2 * ((8 * 4) + 2) + 2 + 2",
  "4 + (2 + 8 * 3 + 2)",
  "6 + 3 * (7 + 6 + 4 * 3 * 5 * (3 + 9 + 9)) * 5 + 8",
  "(5 * 2 + 9 * (5 + 8 + 8) * 4 * (8 * 2 + 6 * 8 * 2 + 2)) + 7 * ((5 * 7 * 8 + 4) * 8 + (7 + 9 + 4 + 5 * 6))",
  "5 + 3 + (4 * 7 * 6) * 7 * 3",
  "(6 + 9 + 7) * 5 + (2 * 4) + 7",
  "5 * (5 * 5 * 9 + 9 * 8 * 5)",
  "(4 + (7 * 9 + 5 + 6) * 8 + 5) * 2 * (7 * 9) + (6 + 5) * 4",
  "(3 * (8 * 9 * 8) * 3 * (8 + 7 + 8 + 5 * 7)) + ((7 + 9 * 2 * 6) + 2 * 5) + 4 * 2 + 4",
  "5 * ((2 + 9 + 3 * 5 * 4) + 9) * 4",
  "8 + ((5 * 5 + 9 + 4) + 2 * 4 * (8 + 2 + 2 * 3 + 5 + 3) * 5) + (6 * 9 + 9 + (3 * 8)) + 4 * 8",
  "(2 * (6 + 3 * 6 + 5) * 7 + 5 + 5) * 3",
  "8 + 6 * (9 + (5 + 5 + 7) * 8 + 5 * (2 * 4 + 7 + 4 * 3 + 9) * (9 * 7 + 3 * 5 * 7)) + 2 + (2 + 5 + 8 + 8 + (2 * 9) * (5 + 8))",
  "5 + ((5 + 6 + 8) * (9 * 7 * 5 * 6 * 8 * 7)) + 4 * 3 * 7 + 7",
  "2 * (3 + 4 + 6 + 2) + (7 * 8) * (3 * 5 * 9 * 5 * 9 * 8) * (7 + 3 + 2 + 7 * (7 + 2 * 9 * 2 + 3 * 4) + 8) * 9",
  "(7 * 7) + 2 * 5 * 2 * 8 + 8",
  "7 * (9 + 3 + 9 + 9) * 7",
  "9 + (7 + 3 * (6 * 5 * 4 * 7)) + ((3 * 3 + 3 + 6 + 4) + 8) * 6",
  "(5 + 2 + 5 + (6 + 2 * 6 + 9 * 6 + 9) + 8) * 9 * (4 * 8 + 5 * 2 + 6) * 8 * 6",
  "4 + 6 * 9 * 9 + ((4 * 8 + 3 * 8 + 2) * 3 + 3) + 6",
  "(3 * 8 * 5 * 4 + 6 * 2) * 8",
  "4 + ((7 * 9 * 3 + 5 * 5) + 2 + 6 * (6 * 8)) + 4 * (5 * (5 * 7 * 7 * 8))",
  "5 + (9 + 2 + 4 * 8 + 5) + 2 * 5 * 5 + (2 + 6)",
  "(3 * (6 * 5 + 9 + 7 + 3) * 9) * 6 * 2 + 7",
  "8 * 6 * 7 + 8 + (5 * (9 + 6 * 5 + 3 * 7) + 6 + 6 * 7) + (9 * 4 + 9 * (6 + 7 + 6))",
  "3 * 8 * 9 + 3 + 2",
  "(7 + (9 + 7 * 8 * 4) * 2 * 6 + 8 + 5) + 3",
  "8 + 9 * (2 * 8 + (7 * 9 + 8 + 4 * 2) * (5 * 6) * (4 + 4 + 6 + 4 * 3 + 8))",
  "(2 + 8 + 3 + (6 + 7 * 4) * 5 * 9) * (4 * 8 * 9)",
  "3 * 3 * 6 + 3 * (8 + 9 * 9 * 5 * 5 + 2) + 6",
  "9 * (5 * 8 * 3 * 3 + 9 * (7 + 6)) + 7",
  "6 * 5 + 5 * ((9 + 3 + 7 * 7 + 9) + (5 + 6 + 2 + 5 + 8) * 4 * 7) + 6 * 6",
  "8 + (3 * 8) * 5 + 3",
  "(2 + 9 + (6 * 2)) * 7 * (8 * (7 * 2 + 8) + 3 + 3 + 3) * (7 + (2 * 6 + 2 * 6 * 5) + 5 * 7 + 5)",
  "5 + ((9 * 8) + 6 * 5 * 9 * 4)",
  "9 + (7 + 7 * 7 + (7 * 9 + 6 * 3)) + 9 * 4 + 7 * 3",
  "(4 * 7 + 7 * 8 + 2 + 7) + (3 * 3) + 6 + 3",
  "((3 * 9 + 4 * 6 * 2) + (2 * 9 + 4 * 9) + 5 * 6) * 3",
  "5 + 4 * 7 + (4 * 4 * 9 * 3 * 9 + (2 * 4 * 8 * 8 * 5 * 4)) * 7",
  "7 * (5 + (6 + 7 * 6 + 9) * 8 * 5 + 7)",
  "4 + (7 * 7 * (3 * 4 + 7 * 8) + 6 + 8) + 4 * 8 * 9",
  "7 + (9 + 8 * 5 + 6) + (6 + 6 + 3 * 4)",
  "(3 + 5 * 2 * 5) * (6 * 2)",
  "(6 + 9 * 3) + (6 + 7 * 9 * 3 * 5 * 3) * 8 + (6 * 3 * 7 * 4 + (5 * 6 + 3 * 4 * 2) + 4) + 4 * 5",
  "(5 * 4 + (2 + 8 * 2 + 5 + 5) + 8 + 4) * 9 + (3 + 5 + 3 * 7) + 3 + 6",
  "(4 + 4 + 7 * 2) + 2",
  "5 * ((6 + 6 + 8 + 8) + 6 + 3) * 4",
  "(4 * 4 * 4 + 4) + 7 + (5 * 9)",
  "4 * 4 * (3 + 2 + 4 + 2 * 6) * ((9 * 6 * 8 + 6) + (3 + 7 + 4 * 3 + 5) * 7 + 4 + 4 + 7) * 5",
  "(6 * 8 + 2) + (6 + 2 * 3) + 3 + 6",
  "9 * 8 + (7 + (6 + 2) * 2 * (3 + 4) * 2 + (3 * 4 * 7 + 3 * 2)) + 4",
  "2 + 3 * ((5 * 5 * 2 * 6 * 8) + 9 * 5 * 2 + 8) * 6 * 6 + (2 * 9 * 8 + 5)",
  "4 + 6 + 3 * (4 * 2 + 4 * 6 + 5)",
  "(4 * 4 + (4 + 7)) * 3 * ((3 + 6 * 9) + (5 + 8) + 2 * (7 * 8 + 7)) + 7 * 6 * 3",
  "(4 + 9 * (5 * 4 + 6 + 9) * 5 + 6) + (2 * 7 * 6) * ((8 * 7 + 6) * 8)",
  "(3 * 8 * 7) * 6 + ((3 * 8 + 6 * 3) * (4 * 7) * 6 * 2 + 7) + 7",
  "2 * (9 * 9 * 4 + (7 * 4 + 6 * 2 * 2 * 5)) * 8 + 6",
  "2 + (2 + 7 * 8 * 8 + 9 + 4) * 5 + 6 + 3 * 5",
  "6 + 4 + (9 + (7 + 7 * 5) * 9) * 3",
  "7 * (6 + 2 * 7 * 8) * 6 + 4 + 8 + 7",
  "(6 * (9 * 8 * 7 * 6 * 3 * 9) * (9 * 9)) * 3 + 7",
  "6 + ((2 + 5 + 5 + 2 + 3) + 5 + 4 + 2 * 4)",
  "9 * 8 * (5 * 8 * (3 * 9 + 7 + 5 + 3) * (7 * 9 * 3 + 8 * 2 * 5))",
  "4 * 3 + 7 * 3 * 4 + 2",
  "5 * 7 * (7 * 5 * 2) + 3",
  "6 * 8 + 6 * (6 + (3 + 4) * 6 + 7) + 7",
  "(3 + 8 * 7 + 8) + ((9 * 3 * 4 + 8) + 8 + 3) + 5 * 7 * 7 + 6",
  "((2 * 4 * 4) * (7 * 9 + 2 + 8 * 7)) * 7 + 2 + 6 + 6 * 5",
  "3 + (6 * 6 + 3) * ((6 + 6 + 5 * 4 * 7) * 2 * 9 * 8 + 9)",
  "(2 + 2 + 7 + (9 * 2 + 9 * 4) + 5) * 8",
  "(3 * (6 * 9 * 6 * 5 + 3 * 4) * 7 + 2) * (3 * 6 + (4 * 3 * 4 + 3 * 9) * 2 + 8) * 6",
  "5 * 8 * (6 + 6)",
  "4 + 6 + (7 * 9 + 4 + (5 * 8 + 2)) + 7",
  "9 * 2 + (5 + (5 * 4 * 2 + 8 * 5 + 3) * (4 * 3 + 9)) + 8 * ((6 + 6 + 2 * 8) + 3) + 7",
  "3 + 8 * 5 * 2 * (5 + 9 * 4 * 9)",
  "6 * 3 * 2 * 4 * ((2 + 6 + 7) + 4 * 6 * 7) * 4",
  "3 + (9 + (9 + 6) * 9) + 9",
  "((8 * 4) + 9 + 4) + 7 * 3 * 3",
  "(2 * 8) + 6 * 7 + 7 * 9 + (7 * 7)",
  "7 + (4 * 9 * (9 * 5) * 8) + (8 * (5 + 8 + 4 + 7 * 4 * 5))",
  "4 * 9 * 4 + 2 * 8",
  "(4 + 9 * (3 * 7 * 2 * 6 * 2 + 4) + (9 * 7 + 6) + 4) * 4 + (6 + (5 * 2 * 5 * 7 * 8 * 2) * 9 + 7)",
  "(2 * 4) * 8",
  "6 * (2 * 8 * 5 + (7 * 3 + 6) * 8) + 7 * 5",
  "(6 + 6 + 3 + 4 + 3 + 3) + 7 + 3 * 6",
  "(5 * 8 * 3 + (6 * 5 + 5 + 2 + 5) + 2) * 4 + 4 * (4 * (6 + 6 * 8)) + 5",
  "8 + 3 + (2 * 6 + (2 * 9 + 5) * 3 * 9 + 5) * 4",
  "7 + 4 + 4 * (4 + 3 * 6 + 3) + 5",
  "7 + (2 * (2 * 2) + 5 * 2)",
  "(2 + 9) + 6 * 8 + (9 * 8 + 2 + (4 * 2 + 5 + 4 + 8 * 5) * 4 * 7) + 8",
  "(5 * 9 + (3 * 9 * 6) * (9 + 2 * 8 + 9) + 8) + 2 + 8 * 6 * 4",
  "6 * 9 + 9 + (7 * (7 + 4 + 3) + 3 + 9 + 5 * 4) + 8 + 7",
  "9 + 9 + ((2 * 4 + 3) + 7 * 5 * 8 * 5 + 7)",
  "(3 + 5 + 2 + 4 * (4 + 8)) * 7",
  "3 + (5 * 7 + (2 + 5 + 4 * 2 * 5) + 8)",
  "9 + 4 * 9 + 6 * (9 * 9 + (7 * 7 * 5 * 4)) * (7 + (8 + 4 + 9 + 5) + (8 * 9 * 2 + 5 * 4 * 9) * 5 + 9 * 7)",
  "(3 * 3 + 3) + 7 + 5 * 3",
  "8 + 5 * 5 + ((3 * 8) + 8) + 6",
  "7 * 4 * (5 * 2) * (6 * 9) + 6",
  "7 * (6 * 6 * 9 + 7) * 2 * 6",
  "8 + ((2 + 7 + 2 + 2 * 9) * 8 + 3 + (5 + 4) * 6) * 5 + 3",
  "((2 * 8 * 7 * 3 * 9) + 9) * 3 * 8 + 2 + 3 * 8",
  "(5 + 7 + 3 * (7 + 4 + 5 * 6 + 6 + 3)) * 8 * 6 * (5 + 7) + 4 * (3 * 3)",
  "((3 * 4 + 9 + 2) + 8 + 8 * 7 + 4) * 7 + 4",
  "(9 + 3 * (5 + 5 + 8 + 5 * 6 + 7) + 7 * 9 * 4) + (3 * 6 + 8 * 7 * 6 * (3 * 8 * 2 * 8 * 7 + 5))",
  "(4 * 6 * 7 + 3 + 7) + (3 * (7 * 3)) * 6",
  "2 * 7 * 2 * 2",
  "6 * 7 * (7 * 3 + (4 * 3 + 4) * (3 + 5 + 9 * 4 * 8) + 2) + 7 * 3 * 2",
  "5 + (2 * 4 * 4 + 4 + (4 * 8 + 9 + 3 + 4) * 9)",
  "(8 * 5 + 8 * 7 + (5 + 5) + 5) * (7 + 4 + 5) * (4 + 8 + 2 * 6)",
  "6 * (5 * 5 * 5 * 3 * 6) + 2 + 2",
  "(7 * 2 * 5 * (9 + 7 + 4) * 5) * 2",
  "5 + 7 * 5 * ((9 * 7 * 3 * 3 + 6) + 2)",
  "3 + 9 + 9 * 7 * 6 * 8",
  "7 * 7 + (5 + 7 * 6 * (3 + 4) + 4)",
  "(7 * 7 + 8 * 2 * (6 + 8 + 7 * 2 + 8 + 5) * 4) + 2 * ((9 + 6) + 6 + 4 + 8 + 6 + 8) * 4 + 7",
  "4 * 8 + 7 * 4 * (5 + 5 * 4)",
  "8 + (7 * 4 + (4 * 9 * 5 * 4 * 2 * 9)) * 9 * (6 + 8)",
  "9 + (8 + 4 + 6 * 6 + 7) + (4 + 2 + 2 + (7 + 5 * 7 * 7 + 9 * 6)) + (2 * 9 * 5 * 6) * 8",
  "(8 + 4) + 5 * 9 + (6 + 6 * 2 * 4) + ((7 + 7 * 8) * 7 + (7 * 5 * 9) + 2) * 7",
  "5 * 6",
  "9 + (9 + 7 + 6 + 5 * 5 + 8) + 3 + 9 * (9 + 9) + 7",
  "(7 * 4 * 5 * 8 + 4 + 5) + 3 * (9 + 3 * 3 + 4 * 2) + 4 * 3",
  "3 + 3 * 2 * 6 + 2",
  "7 + 6 * 6 * 9 + (7 + 7 + 4 + 8 * (3 + 9))",
  "4 * ((2 + 7 * 5 + 6) + 8 + 5 + 7 * 7) * 8",
  "(6 * 9 * (7 * 3 + 8 + 3 * 3) + 4 * 6 * 4) * 3 * 6 + 9 + 3 + 6",
  "5 * 4 + 7 * (2 * 3) + (8 * 2 + 5) * 7",
  "2 * 7 * 8 * (4 + 3 + 4 + 6)",
  "7 + 7 + (4 + (2 * 8 + 9) + 2 + 5) * 8 + 2",
  "(6 + (2 + 9 * 4 * 8) * 5 * (4 * 5 + 6 + 2) * 6) + (6 * 6 + 7 * 9) + 4 * 3",
  "7 + 5",
  "3 * 2 + 2 * 8 * (2 * 2 * 4 + 5 * 2 * 5) + ((8 * 8 + 6 + 4 * 4 * 5) * 3 + 6 + 8)",
  "8 + ((8 * 5) + (6 + 7) + 8 + 7 * (5 + 8)) + 5",
  "5 + (4 * 6)",
  "5 * 2 + 3 + ((7 + 5 + 5 * 5 * 7) * (2 * 8 + 9)) + 6",
  "(3 * 8 * 5 + (6 * 4 + 4 * 8) + 8) * 6 + (3 * 7 * 6 + 4 * 8) * 3 * (8 + 8 + 5)",
  "7 + 8 + 2 * (8 * 6) * 6",
  "3 * (9 * (3 + 7)) * (7 + (4 * 6) + 8 + 8 + 4 * 9) + (3 * 4 + (6 + 8 + 2 + 7 + 7) * 3 * 7)",
  "(6 * (9 + 4 + 9) + (8 + 9 + 9)) + 7 * 8 * 8 + ((9 + 5 + 7 * 2) + 8 + 6 * 4) * 9",
  "7 + (9 + (5 * 6 + 2 * 9) * 2) + 2",
  "(9 + 3 * 2 * 8 + 7 + 8) * 2 * (2 + 2)",
  "7 + 4 + (7 * 7 * 6 + 3 + (4 + 5)) * 9",
  "9 * 5 + (3 * 7 * 4 + 6 * (2 + 2 * 4 + 3 + 3) + (7 * 4 * 5)) + (8 + (9 + 5) * 6) + 3",
  "8 * 8 + 6 + 2 + (8 + 7 + 2 + 3 * 5) * 8",
  "9 + 8 + 8 + (9 * 2 * 9 * 9 * (7 + 6 * 7))",
  "7 * (8 + (5 + 5 * 8 * 3 + 4) + 2 + 4 * 6 + 4) + 8 * 9",
  "9 + 3 * ((8 + 9) * 4 + 8 + 3) * (8 + 7) * (9 + 2 * 5 + (5 + 4 * 2 * 7 + 9 + 8))",
  "8 * 7",
  "(5 + (9 * 5 * 9) * 6 * 4 * (4 * 6) * (6 + 8 + 7 * 5)) * 4 + 6 * 9",
  "7 + 5 * 2 + (4 + 5) + 6 + (9 * 4)",
  "3 * 5 + (5 + 9 + 8)",
  "((2 * 6) + 2) + 4 * 9",
  "3 + 8 * ((2 * 6 + 6) * (9 * 8 + 8) + (6 + 6 * 6 * 5)) + 5 + 4",
  "(4 + (2 + 4) + 6 + 9) * (5 * 2 * 2) * 9 + 6 * (5 * (7 * 4 * 8 + 3 + 9) * 2 + 3 * (2 + 4 + 8 * 9))",
  "6 * (6 + 5 * 4 * 9 + 9 + (3 * 2 + 3)) + 6 + 7",
  "3 * (4 + 4) + 4 * 5 + 6",
  "(8 * 6 * 3 + 7 * 7) + 3",
  "(4 * 6 * 7 * 8 + (8 * 7 + 9 * 5 * 7) + (8 + 7)) * 7 * 7",
  "5 + 8 + 5 * 4 + 3 * ((5 * 9 + 9) * 2 + 3 + 2 + 2 * (2 * 3 + 8 + 5 * 6 + 6))",
  "(8 * 5 + 3 * (8 + 9 * 4 * 5 + 9) * 4 + 9) * 2 + 7 + 3 + 7 + 9",
  "4 + ((8 * 4 + 5 + 7 + 2 * 6) * (7 + 2) + (6 + 2 + 2 * 4 * 7 + 4) + 5) * 9 + 7 * (8 * 4 + (3 + 5) + 7 * 2)",
  "8 * (8 * (5 * 6 * 8) + 9 * 9 * 4) * 3",
  "7 * (9 + 5 * (5 + 5 + 7 * 7) + 4)",
  "8 + 4 + 9 + 5 * (9 + (7 + 2 + 9) * 3 + 3 * 7) + (7 * 7)",
  "4 * 2 + 7 * (7 * 7 * 9 + (6 + 2 + 8 + 7) + 4 * 2) + (5 * 7)",
  "4 * ((5 + 9 * 5 * 6 * 9) * 3) * 8 * (4 + (7 * 7 * 9 * 6))",
  "9 + 9 * 9 * (4 * 6 * 4 * 7 + 7) + ((5 * 9 + 4 * 4 + 2 + 4) * 7 * 6 * 5) + 8",
  "4 + 4 * (4 * 5 * (6 + 9) * 5 * 5 + 2) + (4 * (8 * 2 * 9 + 8) + 2 * 9) * 3 + 2",
  "3 * 7 + 3 * ((3 + 2 * 9 * 5 + 5) + (3 + 5 * 7 + 2 + 6) * (5 * 8 * 8 + 7 + 8 + 4)) * 4 + 3",
  "(2 * 5 * 4 + 3) * 5 + 8 * 4 + 7 * 4",
  "5 * 3 + 3 * 4 * 7 + (6 + 4 + 8 * 7 + 4)",
  "2 + 2 + (7 + 2 + (9 * 7 + 6 + 4 * 2)) + 9 * ((9 * 4 + 4) * 6 * 8 * 5 * 6)",
  "8 + 2",
  "8 + 3 + 4 + ((5 + 3 + 7) * 3 + 4 + 4) + 8",
  "9 + 9 + 2 + (2 * (5 + 4 * 2 + 4)) + (2 + 6 * 2)",
  "2 + (5 + 5 * 6)",
  "2 * 9 + 4 * ((9 * 3 * 2 * 7 * 7) * 8 * 6 + 4)",
  "4 + 5 + 9 + (8 + 6 + 3) + (6 + 9 + 4 + 5) * 2",
  "4 + 3 * 7 + ((3 + 3) * 6 + (4 * 6 * 3 + 9 * 6)) + 8 * 2",
  "7 + 7 + ((4 * 8 + 8) * 7 * 3 * 5 + 3 * 2) + 2 + 8",
  "(7 + 5 * 2 + 8 * (5 * 3 * 4 * 4 + 7 * 5)) * ((3 * 3 + 8) * (4 + 9)) * 7",
  "6 * 9 + 5 * 7 * 7",
  "4 * 2 + (4 + 6 + 3 * 3) * 2 + (9 * 6) + 9",
  "3 + 6 + (3 * 8 * (6 + 3 + 4 * 7) + 4 + (7 * 8))",
  "7 * 4 + 5 + 6 * 7 * (8 * 4 + (4 * 6 * 5 + 4))",
  "8 + 7 + 2 + ((5 + 2) + 5 + 7 * 6 + (7 + 8 + 7 + 6 * 8 + 7) * (4 + 2 + 3 * 2 * 9))",
  "3 + ((7 * 6 * 2 * 9 + 3) * (7 * 8) * 2 * (3 * 5 + 8 * 3)) + 8 * 7 * 9 + 9",
  "2 + ((3 * 8 + 5 * 6) * 4) + 8 * 6 * (2 * 7 + 5 + 5 * (9 * 4 * 9)) * (4 + (2 * 6 * 5))",
  "(7 + 7 * (8 + 7) * (2 + 4 + 8 + 5 * 9 + 5)) * 7 + (4 * 2 + (7 + 8 * 4) + 9 * 3 + 4) * (7 * 7 + 2 + 7 + (8 + 8) + 9)",
  "(5 + 3) + 8 * (8 * 3 * 2 * 5) + 2 * 3 + 3",
  "((9 * 5 + 6 + 3 * 9) * (8 + 3 * 4 + 2 + 9 + 9) + 3) + 4 * 5 * 7 * (7 * (8 * 4 + 7)) + 6",
  "7 + 9 + 3 + (3 + (7 + 4 * 7 * 7) + (5 + 7) * 8 * (7 + 5 * 3 + 7 * 8))",
  "9 * (5 + 6 + 4 * (7 + 9 * 7 * 4) + 9) + (6 * 7) * (3 + 5 * (6 + 9 + 7)) + 8 * (5 * (2 + 3 + 6 + 8 * 8 * 9))",
  "2 * 6 + (3 + (6 * 3 * 6 + 2 * 8 + 5) * (5 + 7 * 8 * 4 + 4 + 7) * 2 * 8 + 3)",
  "6 + (7 * (3 + 2)) * 8 * 6",
  "8 * 7 * (8 * 7 * 8 + (4 + 4 + 4 + 3) + 4 * 8) + 7",
  "5 + 4 + (8 + 3 + 7 * 9 + 6 * 4) * (3 * 4 + 3 * 4 + 5) * 7 * 7",
  "6 * ((5 * 6 * 7) * (8 * 2 + 2 * 6 * 6 * 3) * (5 + 2) * 5 * (8 + 7 + 3)) * 3 * 7 * 9 * 6",
  "3 * 2 + (6 * 3 * 5 + 3) + 6 * 9 * 3",
  "(5 + 9 + (8 * 5 * 6 + 2 + 4 + 2)) + 9 * 9 + (7 + 9 * 7 * (8 * 6) + 2 + 5) + (9 + 4 * 7) * ((8 + 9 + 9 + 4) + (3 * 6) + 8 * 8 + (2 + 6))",
  "7 + 6 * (3 + 7) * 2",
  "(2 * 5 + 9 + 7 * 9) * 7 + 3 * 9 * 2",
  "((5 + 2 + 9 * 9 + 3 * 2) + 7 + 8 * 8) * 4 + (4 + 9 + 5 * 6 * 2 * (2 * 4 * 4 + 2)) + 9 + (9 + 4 * (8 * 7 * 8 * 3) * 8 * (2 * 9))",
  "(6 * 4 * 4) + 6 + 5 * 3 * 2",
  "(7 * 7) + 3 + ((4 * 8 + 3) * 2) + 5 + 5 * 3",
  "(3 + (8 + 6 * 4 + 7 * 7)) + (5 * 2 + (6 + 2 * 4 + 5) * 8) + ((6 * 4) * (3 + 8 + 8 * 6 + 8 + 4) + 6)",
  "9 * 3 + (8 * 2 * 8 + 6 * 7) * 5",
  "9 + 6 + (4 * 9) + ((2 + 2 + 7 + 2 * 6) * 3 * (2 * 6 + 9 * 4))",
  "6 * 8 + (3 * 3 + 9 + 4 * 3)",
  "2 * (4 + 2) * 8 + (2 * (6 * 6 * 9 * 5 * 6 + 8))",
  "6 * ((8 + 5 + 5 + 2 + 5) * 2 * (9 * 4 * 2 * 5 + 2 + 9)) + 3 * 3 * 7 + 4",
  "(6 * 7 + (8 * 7) + (8 * 7) * (9 + 6 + 9 + 2) + 6) + 7 * (8 + 7) + 7 + 6",
  "8 + 9 + (6 * 6 * 7 + 9 + 7) * (7 * (9 * 7 * 5 + 8) * 5 * (7 * 3) + 6 + 3) * ((5 + 5 * 7 * 7 * 5 * 9) + 9 * 6 + 5)",
  "2 * 9 + ((9 + 3) + 9 * (3 + 9 * 8 * 8 + 7 * 8) + 8 * 9) * 6 + 4 + 8"
]

let result = document.querySelector(".result")


// Note: This is not used 18A (not 18B)
const calcExpressionLeftToRight = (expression) => {
  let total = 0
  let pos = 0
  let numberStr = ""
  let number = 0
  let add = false
  let multiply = false
  let done = false
  if (!expression)
    return NaN
  
  while (pos < expression.length) {
    currChar = expression[pos]
    //console.log(testStringList[0][pos])
    if (currChar == '+') {
      add = true
    } else if (currChar == '*') {
      multiply = true
    } else if (currChar == ' ') {
      //console.log(numberStr)
      if (numberStr != "") {
        number = parseInt(numberStr)
        numberStr = ""
        if (!add && !multiply)
          total = number
        else if (add)
          total += number
        else if (multiply)
          total *= number
        add = false
        multiply = false
      }
      if (currChar == ')')
        done = true
    } else {
      numberStr += currChar
    }
    pos++
  }
  if (numberStr != "") {
    number = parseInt(numberStr)
    numberStr = ""
    if (!add && !multiply)
      total = number
    else if (add)
      total += number
    else if (multiply)
      total *= number
    add = false
    multiply = false
  }
  //console.log("Total = ", total)
  return total
}

// Used for Question 18B
const calcAddPrecedenceExpression = (expression) => {
  let total = 0
  let pos = 0
  let numberStr = ""
  let number = 0
  let startPos = 0
  let add = false
  let multiply = false
  let anyAddition = false
  let anyMultiply = false
  
  if (!expression)
    return NaN
  // Add an extra "!" to end of expression to signal the END
  expression += "!"

  while (pos < expression.length) {
    currChar = expression[pos]
    //console.log(testStringList[0][pos])
    anyAddition = false
    if (expression.includes('+'))
      anyAddition = true
    anyMultiply = false
    if (expression.includes('*'))
      anyMultiply = true
    if (currChar == '+') {
      add = true
    } else if (currChar == '*') {
      multiply = true
    } else if (currChar == ' ' || currChar == '!') {
      //console.log(numberStr)
      if (numberStr != "") {
        number = parseInt(numberStr)
        numberStr = ""
        if (!add && !multiply) {
          total = number
        } else if (add) {
          total += number
          let totalStr = total.toString()
          if (anyMultiply || currChar != '!') {
            // Chop and replace the addition calculation total into the expression and return back to start
            // eg "2 * 3 + 4" will become "2 * 7"
            expression = expression.slice(0,startPos) + totalStr + expression.slice(pos)
            //console.log("New expression: " + expression + " , Start Pos = " + startPos)
            total = 0
            pos = -1
          }
          //pos = 0
        } else if (multiply) {
          if (!anyAddition) {
            total *= number
          } else {
            total = number
          }
        }
        add = false
        multiply = false
      }
    } else {
      if (numberStr == "" && !add) {
        startPos = pos
      }
      numberStr += currChar
    }
    pos++
  }
  //console.log("Total = ", total)
  return total
}

const calcLineTotal = (line) => {
  let done = false
  let currChar = ""
  let pos = 0
  let startPos = 0
  let endPos = 0
  let expression = ""
  while (!done || pos > line.length) {
    currChar = line[pos]
    if (!line.includes("(")) {     
      done = true
    } else if (currChar == '(') {
      startPos = pos
      expression = ""
    } else if (currChar == ')') {
      endPos = pos
      //console.log(expression)
      let expressionResult = calcAddPrecedenceExpression(expression).toString()
      line = line.slice(0,startPos) + expressionResult + line.slice(endPos+1)
      //console.log(line)
      pos = -1
      //console.log("Result = " + calcExpression(expression).toString())
      //let expressionResult = calcExpression(expression).toString()
    } else {
      expression += currChar
    }
    pos++
  }
  return calcAddPrecedenceExpression(line)
}

const getTotalSum = (lines) => {
  let total = 0
  lines.forEach(line => {
    total += calcLineTotal(line)
  })
  return total
}

result.innerHTML = "2020 Question 18B - Total Sum of all lines (with Addition as precedence) = " + getTotalSum(puzzle_lines)