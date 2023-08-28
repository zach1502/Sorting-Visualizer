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
    description:
      <>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          Insertion Sort is a simple and intuitive sorting algorithm. It works by building a sorted section of the list one item at a time by repeatedly taking one element from the unsorted portion and inserting it into its correct position within the sorted portion.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          Imagine you are playing cards. As you pick up cards one by one, you sort them in your hand by inserting each card in its right place, so you always hold a sorted hand. Insertion Sort works in a similar way.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          The time complexity of Insertion Sort is O(n²) in the worst and average case, and O(n) in the best case (when the list is already sorted).
          Insertion Sort tends to perform well on small lists or when the list is almost sorted, which makes it a good choice for sorting small amounts of data.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          It is a stable algorithm, which means that it preserves the order of items with equal keys. Additionally, it is an in-place algorithm, which means that it does not require any extra memory space to sort the list, making it a memory-efficient option.
        </Typography>
        <Typography variant="h3">Similar Algorithms</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={LIST_HEADER_STYLE}
              primary='Selection Sort'
              secondaryTypographyProps={LIST_ITEM_STYLE}
              secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
            />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primaryTypographyProps={LIST_HEADER_STYLE}
              primary='Shell Sort'
              secondaryTypographyProps={LIST_ITEM_STYLE}
              secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
            />
          </ListItem>
        </List>
      </>
  },

  'Selection Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Insertion Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Insertion Sort is similar in that it builds a sorted portion of the list one element at a time like Selection Sort, the method they use to do this is different.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Heapsort Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Heapsort is similar to Selection Sort as it also works by repeatedly selecting the maximum element from the unsorted portion of the list. However, Heapsort uses a binary heap data structure to efficiently find the maximum element, which improves its time complexity to O(n log n).'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Cycle Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Cycle Sort is similar to Selection Sort as it also repeatedly selects the minimum element from the unsorted portion of the list. However, Cycle Sort minimizes the number of swaps by moving each element to its correct position in a cycle, which makes it more efficient in terms of the number of writes.'
          />
        </ListItem>
      </List>
    </>
  },

  'Cocktail Shaker Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Cocktail Shaker Sort, also known as Bidirectional Bubble Sort, Shaker Sort, Ripple Sort, or Shuttle Sort, is a variation of the Bubble Sort algorithm. Similar to Bubble Sort, it compares adjacent elements and swaps them if they are in the wrong order. However, the key difference is that, unlike Bubble Sort, which only traverses the list in one direction, Cocktail Shaker Sort traverses the list in both directions - first from left to right, and then from right to left.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        This two-way approach helps to slightly improve the efficiency of the algorithm by reducing the number of passes required to completely sort the list. The algorithm continues to make passes over the list, swapping adjacent elements if necessary, until a complete pass is made with no swaps, indicating that the list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The time complexity of Cocktail Shaker Sort in the worst and average cases is O(n²), similar to Bubble Sort, making it inefficient for large lists. However, it can perform better than Bubble Sort on certain types of lists, such as ones where the majority of the elements are already in order. It is a stable and in-place sorting algorithm.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Bubble Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Bubble Sort is the most basic version of Cocktail Shaker Sort and only sorts in one direction, from left to right, on each pass through the list.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Comb Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Comb Sort is another variation of Bubble Sort, but instead of comparing adjacent elements, it compares elements at a certain "gap" distance, which decreases over time.'
          />
        </ListItem>
      </List>
    </>
  },

  'Radix Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Radix Sort is a non-comparative sorting algorithm that works by distributing the elements into buckets according to their individual digits. 
        Non-comparative sorting algorithms are not bounded by the O(n log n) time complexity lower limit of comparison-based sorting algorithms, which makes them more efficient for large lists.
        Radix Sort is not widely used in practice, because of its high space complexity and because the constant factor of its time complexity is usually massive compared to other sorting algorithms.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        It processes the digits of each number one at a time, starting from the least significant digit (LSD) to the most significant digit (MSD), or vice versa.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Initially, all elements are placed in a single bucket. Then, the elements are redistributed into separate buckets based on the current digit being considered. After redistribution, the buckets are gathered back together in order, and the process is repeated for the next digit until all digits have been considered.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Radix Sort has a time complexity of O(nk/d), where n is the number of elements, and k is the number of digits in the input numbers and d is the digit size. It is a stable algorithm, which means it preserves the order of items with equal keys. However, it is not an in-place algorithm, as it may require a large amount of additional memory space to store the buckets during the sorting process.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Counting Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Counting Sort is similar to Radix Sort as it is also a non-comparative sorting algorithm. It sorts the elements by counting the number of occurrences of each unique element and then uses this count to place them in their correct position. Radix Sort uses Counting Sort as a sub-routine.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Bucket Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Bucket Sort is another non-comparative sorting algorithm that sorts elements into several buckets based on their values. Each bucket is then sorted individually, either using another sorting algorithm or by recursively applying the Bucket Sort algorithm. This is somewhat similar to the way Radix Sort sorts elements into buckets based on their digits.'
          />
        </ListItem>
      </List>
    </>
  },

  'Intro Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Heap Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Block Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Shell Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Tim Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Exchange Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Cycle Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Patience Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Smooth Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Strand Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Comb Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Gnome Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Odd-Even Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Pigeonhole Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Bucket Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Counting Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Spread Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Pancake Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'I Can\'t Believe It Can Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Bitonic Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Bogo Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Stooge Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Slow Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Stalin Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Sleep Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Delete Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Insertion Sort. It also divides the list into a sorted and an unsorted region. However, instead of inserting each element in its correct position as in Insertion Sort, Selection Sort repeatedly selects the minimum (or maximum) element from the unsorted region and swaps it with the first unsorted element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort is a generalization of Insertion Sort. It works by comparing elements separated by a gap of several positions. This way, it can move an element to its correct position in fewer swaps than regular Insertion Sort.'
          />
        </ListItem>
      </List>
    </>
  },

  'Tree Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted portion of the list and swapping it with the first unsorted element.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process begins by initially considering the entire list as unsorted. In each iteration, the smallest (or largest) element from the unsorted portion of the list is selected and swapped with the first unsorted element, thus expanding the sorted portion of the list by one element. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Selection Sort has a time complexity of O(n²) in all cases, making it inefficient for large lists. It is not a stable algorithm, meaning it does not necessarily preserve the relative order of equal keys. However, it is an in-place algorithm, as it does not require any additional memory space beyond what is needed to hold the input list.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Insertion Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Insertion Sort is similar in that it builds a sorted portion of the list one element at a time like Selection Sort, the method they use to do this is different.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Heapsort Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Heapsort is similar to Selection Sort as it also works by repeatedly selecting the maximum element from the unsorted portion of the list. However, Heapsort uses a binary heap data structure to efficiently find the maximum element, which improves its time complexity to O(n log n).'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Cycle Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Cycle Sort is similar to Selection Sort as it also repeatedly selects the minimum element from the unsorted portion of the list. However, Cycle Sort minimizes the number of swaps by moving each element to its correct position in a cycle, which makes it more efficient in terms of the number of writes.'
          />
        </ListItem>
      </List>
    </>
  },
}


export default algorithmDescriptions;
