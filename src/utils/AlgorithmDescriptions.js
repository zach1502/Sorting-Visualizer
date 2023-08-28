import { List, ListItem, ListItemText, Typography } from "@mui/material";

const LIST_HEADER_STYLE = { variant: 'h4' };
const LIST_ITEM_STYLE = { variant: 'body1', color: 'black' };

const algorithmDescriptions = {
  'Bubble Sort': {
    description:
      <>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          Bubble Sort is one of the simplest sorting algorithms and it works by repeatedly stepping through the list of items (like numbers) and comparing each pair of adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm gets its name from the way elements "bubble" to the top of the list.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          One important thing to note is that Bubble Sort is not very efficient for lists with a large number of items. Its time complexity is O(n²) in the worst and average case, and O(n) in the best case (when the list is already sorted). For this reason, it is not often used in practice, but it is a good starting point for understanding the principles of sorting.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          Bubble Sort is a stable algorithm, which means that it preserves the order of items with equal keys. It is also an in-place algorithm, which means that it operates directly on the input list and does not require additional memory space.
        </Typography>
        <Typography variant="h3">Similar Algorithms</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={LIST_HEADER_STYLE}
              primary='Cocktail Shaker Sort'
              secondaryTypographyProps={LIST_ITEM_STYLE}
              secondary='Cocktail Shaker Sort is a variation of Bubble Sort that sorts in both directions on each pass through the list.'
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={LIST_HEADER_STYLE}
              primary='Comb Sort'
              secondaryTypographyProps={LIST_ITEM_STYLE}
              secondary="Instead of always comparing adjacent values, it compares values at a certain 'gap', which gets smaller with each iteration until the gap is size 1, at which point it becomes Bubble Sort."
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={LIST_HEADER_STYLE}
              primary='Gnome Sort'
              secondaryTypographyProps={LIST_ITEM_STYLE}
              secondary='It continuously swaps the adjacent elements if they are in the wrong order, but then moves forward or backward depending on whether it made a swap or not.'
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={LIST_HEADER_STYLE}
              primary='Odd-Even Sort'
              secondaryTypographyProps={LIST_ITEM_STYLE}
              secondary='The list is divided into two separate groups - one containing elements at odd indices and the other, at even indices. The algorithm then sorts the odd indicies then the even indicies.'
            />
          </ListItem>
        </List>
      </>
  },

  'Quick Sort': {
    description:
      <>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          Quick Sort is an efficient sorting algorithm that works by selecting a 'pivot' element from the list and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The pivot selection and partitioning steps are done recursively for each sub-array until the base case of an empty array or an array with a single element is reached. These smaller, sorted arrays are then combined to form a single sorted array.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          The efficiency of Quick Sort comes from the fact that, on average, each element only needs to be compared about log2(n) times. This allows Quick Sort to sort n elements in O(n log n) time, making it much faster than other simple algorithms like Bubble Sort or Insertion Sort for large lists. However, in the worst case, Quick Sort can take up to O(n²) time, but this scenario is rare.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          Quick Sort is not a stable sorting algorithm, which means that the relative order of equal elements may not be preserved.  It is an in-place algorithm, which means that it operates directly on the input array without needing any extra memory space to sort the list. However, it requires O(log n) stack space for the recursive function calls.
        </Typography>
        <Typography variant="h3">Similar Algorithms</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={LIST_HEADER_STYLE}
              primary='Merge Sort'
              secondaryTypographyProps={LIST_ITEM_STYLE}
              secondary='Merge Sort is similar to Quick sort as both are divide and conquer algorithms, breaking the array into smaller parts and sorting them independently before combining them back together.'
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={LIST_HEADER_STYLE}
              primary='Intro Sort'
              secondaryTypographyProps={LIST_ITEM_STYLE}
              secondary="Introsort starts with quicksort but it switches to heapsort and insertion sort, because it is more efficient for smaller amounts of data."
            />
          </ListItem>
        </List>
      </>
  },

  'Merge Sort': {
    description:
      <>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          Merge Sort is an efficient, stable sorting algorithm that works by dividing the list into smaller sublists, sorting those sublists, and then merging them back together to create a sorted list. The algorithm is based on the principle that it is easier to merge two smaller sorted lists into one large sorted list than it is to sort one large unsorted list.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          The process is repeated recursively, which means that the divided sublists are themselves divided into even smaller sublists until each sublist consists of only one element. A list with one element is considered sorted. Then, the merging process begins by combining the single-element lists into larger sorted lists, until all the elements are merged back into a single sorted list.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          Merge Sort has a time complexity of O(n log n) in all cases, which makes it extremely efficient. It is a stable algorithm, which means that it preserves the order of items with equal keys. However, it is not an in-place algorithm, as it requires additional memory space to temporarily store the sublists during the merging process.
        </Typography>
        <Typography variant="h3">Similar Algorithms</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={LIST_HEADER_STYLE}
              primary='Tim Sort'
              secondaryTypographyProps={LIST_ITEM_STYLE}
              secondary='Timsort is a hybrid sorting algorithm derived from merge sort and insertion sort. It first divides the list into small segments, then sorts them using insertion sort, and then merges the segments using a merge sort-like technique.'
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={LIST_HEADER_STYLE}
              primary='Strand Sort'
              secondaryTypographyProps={LIST_ITEM_STYLE}
              secondary='Strand Sort iteratively pulls out sorted sublists from the unsorted list and then merges them together until there are no more sublists to merge. This continues until the unsorted list is empty.'
            />
          </ListItem>
        </List>
      </>
  },

  'Insertion Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Selection Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Cocktail Shaker Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Radix Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Intro Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Heap Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Block Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Shell Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Tim Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Exchange Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Cycle Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Patience Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Smooth Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Strand Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Comb Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Gnome Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Odd-Even Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Pigeonhole Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Bucket Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Counting Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Spread Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Pancake Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'I Can\'t Believe It Can Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Bitonic Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Bogo Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Stooge Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Slow Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Stalin Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Sleep Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Delete Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Tree Sort': {
    description: [
      'text1',
      'text2',
      'text3',
    ],
  },
}


export default algorithmDescriptions;
