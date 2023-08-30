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
        Intro Sort, or Introspective Sort, is a hybrid sorting algorithm that is designed to be an improvement over the Quick Sort algorithm. It starts with Quick Sort and switches to Heap Sort when the recursion depth exceeds a level based on the value of log2 n, and switches to Insertion Sort for very small segments.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The reason for this design is to combine the fast average performance of Quick Sort with the worst-case performance of Heap Sort. Quick Sort is very fast in practice, but can have a worst-case time complexity of O(n²) for certain data sets. Heap Sort, on the other hand, always runs in O(n log n) time, but is often slower in practice than Quick Sort. By combining these two algorithms, Introsort provides both fast average performance and optimal worst-case performance.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        This makes Introsort an efficient and versatile sorting algorithm suitable for real-world usage, as it provides good performance in most scenarios. It has an average and worst-case time complexity of O(n log n), making it a very efficient algorithm.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Quick Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Quick Sort is a part of the Intro Sort algorithm. Intro Sort begins with Quick Sort and switches to Heap Sort if the recursion depth exceeds a certain level.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Heap Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Heap Sort is used by Intro Sort as a fallback mechanism to avoid the Quick Sort worst-case scenario of O(n²) time complexity.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='InsertionSort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Insertion Sort is used by Intro Sort for very small segments of the array because it is more efficient for small data sets.'
          />
        </ListItem>
      </List>
    </>
  },

  'Heap Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Heap Sort is a popular and efficient sorting algorithm that builds a binary heap and then repeatedly extracts the maximum element from the heap until the heap is empty. The algorithm is based on the principle of organizing the data in a special binary tree structure called a heap.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The algorithm begins by building a max-heap from the input list, which means arranging the elements in such a way that each parent node is greater than or equal to its children. Once the heap is constructed, the root of the heap (which is the maximum element) is swapped with the last element, and the size of the heap is reduced by one. Then, the heap property is restored by reorganizing the remaining elements, and the process is repeated until the heap has only one element left.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Heap Sort has a time complexity of O(n log n) in all cases, which makes it extremely efficient; However, it is slower than Merge Sort. It is an in-place algorithm, which means that it does not require additional memory space to sort the list. However, it is not a stable algorithm, as it does not preserve the order of items with equal keys.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is similar to Heap Sort as it also works by repeatedly selecting the maximum (or minimum) element from the unsorted portion of the list and placing it in its correct position.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Tree Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Tree Sort is similar to Heap Sort as both algorithms use a binary tree structure to sort the elements. However, Tree Sort uses a binary search tree for sorting, while Heap Sort uses a binary heap.'
          />
        </ListItem>
      </List>
    </>
  },

  'Block Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Block Sort, also known as Block Merge Sort, is an adaptive sorting algorithm that divides the list into small fixed-size blocks, sorts the blocks using an efficient sorting algorithm (like Insertion Sort), and then merges the sorted blocks into a single sorted list.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The main idea behind Block Sort is to take advantage of the already sorted sequences (natural runs) in the input list. It starts by dividing the list into small blocks of fixed size and sorts each block using a stable and efficient sorting algorithm. Then, it merges the sorted blocks using a merging algorithm until the entire list is sorted. This implementation of Block Sort uses Insertion Sort for sorting the blocks.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Block Sort has a time complexity of O(n log n) in the worst case, but it can be much faster if the input list has many already sorted sequences. It is a stable algorithm, which means that it preserves the order of items with equal keys. It is also an in-place algorithm, as it only requires a constant amount of extra memory space, regardless of the input size.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Merge Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Merge Sort is similar to Block Sort as it also involves dividing the list into smaller parts, sorting them, and then merging them back together.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Timsort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Timsort is a hybrid sorting algorithm derived from merge sort and insertion sort. It is designed to perform well on many kinds of real-world data. Block Sort and Timsort are similar as they both take advantage of already sorted sequences in the input list.'
          />
        </ListItem>
      </List>
    </>
  },

  'Shell Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Shell Sort is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. Starting with far apart elements can move some out-of-place elements into the correct position faster than a simple nearest neighbor exchange.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The time complexity of Shell Sort is dependent on the gap sequence chosen, with the best-known average time complexity being O(n log² n). It is not a stable sort, which means that the relative order of equal sort items is not preserved.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Shell Sort works by defining a gap and comparing elements that are that gap distance apart. For example, if the gap is 5, the algorithm compares the first and sixth elements, the second and seventh elements, and so on. After a pass with a specific gap, the algorithm reduces the gap and does another pass until the gap is 1, and a final pass is done to complete the sort.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Insertion Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Insertion Sort is similar to Shell Sort as Shell Sort can be seen as a generalization of Insertion Sort where the elements compared and possibly swapped are far apart initially, and the gap between them decreases with each pass.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Bubble Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Bubble Sort is another sorting algorithm that is similar to Shell Sort. In Bubble Sort, adjacent elements are compared and swapped if necessary. Shell Sort can be seen as a variation of Bubble Sort where the gap between compared elements starts large and gets smaller with each pass.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Comb Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Comb Sort is a variation of Bubble Sort that is similar to Shell Sort because it compares elements at a certain gap apart and then reduces the gap with each pass.'
          />
        </ListItem>
      </List>
    </>
  },

  'Tim Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Tim Sort is a hybrid sorting algorithm, derived from Merge Sort and Insertion Sort, designed to perform well on many kinds of real-world data. It first divides the list into small segments, then sorts them using Insertion Sort, and then merges the sorted segments using a process similar to Merge Sort.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The algorithm identifies small sequences of data already ordered, named runs, and uses them to form initial sorted segments. It then merges those runs until the whole array is sorted. This approach takes advantage of runs of consecutive ordered elements that are frequently encountered in real-world data.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Tim Sort is stable (preserves the order of equal elements) and has a time complexity of O(n log n) in the worst case, but it performs impressively well on partially sorted arrays. It is used in Python's built-in 'sort' function and also in Java's Arrays.sort() method.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Merge Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Merge Sort, like Tim Sort, is a stable sorting algorithm that works by dividing the list into smaller sublists, sorting those sublists, and then merging them back together. Tim Sort is actually based on Merge Sort and Insertion Sort.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Insertion Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Insertion Sort is used in Tim Sort for sorting small segments of data. Tim Sort divides the array into small segments and sorts them using Insertion Sort before merging them.'
          />
        </ListItem>
      </List>
    </>
  },

  'Exchange Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Exchange Sort is a comparison-based sorting algorithm. It works by comparing each element in the list with every other element and exchanging them if they are in the wrong order. This process is repeated until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The algorithm starts by comparing the first element with every other element in the list. If any element is smaller than the first element, they are exchanged. Next, the second element is compared with all the elements (except the first one) and exchanged if necessary. This process continues until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Exchange Sort has a time complexity of O(n^2) in the worst case, which makes it inefficient for large lists. It is a simple algorithm, but there are more efficient algorithms available for sorting large lists. However, Exchange Sort is an in-place algorithm, as it does not require additional memory space to temporarily store elements during the sorting process.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Bubble Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Bubble Sort is similar to Exchange Sort as it compares each element in the list with its adjacent element and swaps them if they are in the wrong order. This process is repeated until the entire list is sorted.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is another comparison-based algorithm that works by selecting the smallest (or largest) element from the list and swapping it with the current element. This process is similar to Exchange Sort as it involves exchanging elements to sort the list.'
          />
        </ListItem>
      </List>
    </>
  },

  'Cycle Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Cycle Sort is an in-place, comparison-based sorting algorithm that works by moving each element to its correct position in the list, one at a time. The algorithm identifies cycles in the list, where a cycle is a group of elements that are not in their correct positions. Each element in a cycle is moved to its correct position.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process starts by initializing an item as the current item and finding the correct position for it in the list. The item currently in that position becomes the new current item, and the process is repeated until the algorithm returns to the original current item. This completes a cycle, and the next cycle is started by selecting the next item in the list that is not in its correct position.
        Cycle Sort minimizes the number of writes to the original list, which makes it more efficient than other algorithms in terms of the number of writes.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Cycle Sort has a time complexity of O(n^2) in all cases, which makes it less efficient compared to other sorting algorithms. However, it is an in-place algorithm, which means that it does not require additional memory space to sort the list. Also, it is a stable algorithm, which means that it preserves the order of items with equal keys.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Bubble Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Like Cycle Sort, Bubble Sort is an in-place sorting algorithm. Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. This process is repeated until the list is sorted.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Selection Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Selection Sort is another in-place sorting algorithm. It repeatedly selects the minimum element from the unsorted portion of the list and swaps it with the first unsorted element, which is similar to Cycle Sort finding the correct position of each element and placing it there.'
          />
        </ListItem>
      </List>
    </>
  },

  'Patience Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Patience Sort is a solitaire card game inspired sorting algorithm. Imagine you are playing a game of solitaire. You have a deck of cards, and you deal them one by one onto a row of piles on the table, according to certain rules. For the sorting algorithm, the 'cards' are the elements of your list, and the 'rules' are as follows: starting from the left, you place each card on the leftmost pile where it is greater than the card on top. If it's smaller than all the top cards, you start a new pile to the right.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Once all the cards are dealt, you then pick them back up, starting with the smallest pile (which will have the smallest 'card' on top), and then the next smallest, and so on, until all the cards are back in your hand. The cards will now be sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Patience Sort has an average time complexity of O(n log n), which makes it efficient. However, the worst-case time complexity is O(n^2), which can happen if the input list is in reverse order. It is a stable algorithm, which means that it preserves the order of items with equal keys. It is also an in-place algorithm, as it only requires a constant amount of extra memory.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Insertion Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Insertion Sort is similar to Patience Sort as it also builds the sorted array one item at a time by repeatedly picking the next item and inserting it into the sorted portion of the array.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Heap Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Heap Sort is similar in the sense that it also divides the array into sorted and unsorted regions and repeatedly shrinks the unsorted region by extracting the largest/smallest element and moving that to the sorted region.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Tree Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Just like Patience Sort, Tree Sort also uses an intermediate structure to store the elements of the input list and sort the list.'
          />
        </ListItem>
      </List>
    </>
  },

  'Smooth Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Smooth Sort is an efficient, in-place sorting algorithm that is based on the heap data structure. It was designed to improve upon Heap Sort by reducing the number of comparisons and swaps in the worst case while maintaining the same average time complexity.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Smooth Sort works by dividing the list into sublists, each of which is an ordered tree (a special type of heap). It then repeatedly extracts the minimum element from the current heap and places it in its final position in the sorted list, while maintaining the heap properties of the remaining elements. This process continues until all the elements are in their final, sorted positions.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Smooth Sort has a time complexity of O(n log n) in the worst case, which makes it very efficient. It is also an in-place algorithm, as it only requires a constant amount of additional memory to operate. However, it is not a stable algorithm, as it does not preserve the order of items with equal keys.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Heap Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Heap Sort is similar to Smooth Sort as it also uses a heap data structure to sort the list of elements. However, Heap Sort does not use ordered trees and does not minimize the number of comparisons and swaps as Smooth Sort does.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Tree Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Tree Sort is another algorithm that uses a tree structure (binary tree) for sorting. However, it does not have the same efficiency optimizations as Smooth Sort.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Merge Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Merge Sort, like Smooth Sort, has a time complexity of O(n log n). However, it uses a different approach, dividing the list into smaller sublists, sorting those sublists, and then merging them back together to create a sorted list.'
          />
        </ListItem>
      </List>
    </>
  },

  'Strand Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Strand Sort is a sorting algorithm that works by repeatedly pulling sorted sublists (or strands, haha get it?) out of the list to be sorted and merging them with a result list. The algorithm begins by taking the first element of the list and then iterating over the list, pulling out elements that are in order and appending them to the current sublist.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Once the end of the list is reached, the created sublist is then merged into the result list. This process is repeated until all elements have been moved to the result list, which is then sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Strand Sort is a stable algorithm, which means that it preserves the order of items with equal keys. However, it is not an in-place algorithm, as it requires additional memory space to temporarily store the sublists during the merging process. The time complexity of Strand Sort in the worst case is O(n^2), but it works more efficiently on partially sorted lists.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Merge Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Like Strand Sort, Merge Sort also divides the list into smaller parts and then merges them back together in sorted order. Both algorithms are stable and work more efficiently on partially sorted lists.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Insertion Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Insertion Sort also builds a sorted list one element at a time by repeatedly picking the next element from the unsorted section and inserting it into its correct position in the sorted section. This is similar to how Strand Sort builds sorted sublists before merging them into the result list.'
          />
        </ListItem>
      </List>
    </>
  },

  'Comb Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Comb Sort is an improvement of the Bubble Sort algorithm. Similar to Bubble Sort, it repeatedly iterates through the list of elements, comparing pairs of elements and swapping them if they are in the wrong order. However, instead of always comparing adjacent elements, Comb Sort starts by comparing elements that are a certain 'gap' apart and then shrinking the gap in each iteration.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The gap starts as a large value, usually the length of the list divided by a factor (1.3 is commonly used), and is then shrunk in each iteration, usually by dividing it by the same factor, until the gap is 1, and the algorithm behaves like Bubble Sort. This process helps to move large values to the right side of the list and small values to the left side more quickly than Bubble Sort, which speeds up the sorting process.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Comb Sort has a time complexity of O(n^2) in the worst case, but it usually performs much better and can be close to O(n log n) on average. It is not a stable algorithm, which means it does not preserve the order of items with equal keys, but it is an in-place algorithm, as it does not require any additional memory space.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Bubble Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary="Bubble Sort is the basic form of sorting algorithm where each element is compared to its adjacent element and they are swapped if they are in the wrong order. Comb Sort improves upon this by comparing elements that are a 'gap' apart instead of always comparing adjacent elements."
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Shell Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Shell Sort also uses a shrinking gap for comparisons, similar to Comb Sort. However, Shell Sort uses a more complex method to determine the gap sizes.'
          />
        </ListItem>
      </List>
    </>
  },

  'Gnome Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Gnome Sort, also known as Stupid Sort, is a simple sorting algorithm that is similar to the way someone might sort a deck of playing cards in their hands. Imagine you have a deck of cards and you want to sort them. You would start at the left and compare the current card with the previous card. If the current card is smaller, you would swap them and then compare with the card before. You repeat this process until the current card is greater, then move to the next card.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        In Gnome Sort, you start at the second element of the list and compare it with the one before. If the current element is smaller than the previous one, you swap them and move one position backward. If the current element is greater or equal, you move one position forward. You repeat this process until the entire list is sorted.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Gnome Sort has a worst-case time complexity of O(n^2), which makes it less efficient for large lists. However, it is easy to implement and can perform better for small lists or lists that are mostly sorted. It is a stable algorithm, which means that it preserves the order of items with equal keys. Additionally, it is an in-place algorithm, as it does not require additional memory space.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Bubble Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Bubble Sort is similar to Gnome Sort in that it compares adjacent elements and swaps them if they are in the wrong order. The process is repeated until the entire list is sorted.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Insertion Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Insertion Sort is similar to Gnome Sort as it builds the final sorted array one element at a time, by comparing the current element with the previous ones and placing it at its correct position.'
          />
        </ListItem>
      </List>
    </>
  },

  'Odd-Even Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Odd-Even Sort, also known as Brick Sort, is a relatively simple sorting algorithm, developed originally for use on parallel processors with local interconnections. It's a comparison based algorithm that works by repeatedly stepping through the list, comparing each pair of adjacent elements and swapping them if they are in the wrong order. This algorithm is divided into two phases- the odd phase and the even phase. In the odd phase, the algorithm performs all the comparisons and swaps on odd index, and in the even phase, it performs all the comparisons and swaps on even index.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The process is repeated until the list is sorted. The main advantage of this algorithm is its ability to quickly sort already almost-sorted data.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The time complexity of Odd-Even Sort in the worst case is O(n^2), which makes it inefficient on large lists, and it is generally not used in practice for sorting large data volumes. It is a stable algorithm, which means that it preserves the order of items with equal keys. It is also an in-place algorithm, as it only requires a constant amount of extra memory.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Bubble Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Bubble Sort is similar to Odd-Even Sort in that they both repeatedly step through the list, compare each pair of adjacent items and swap them if they are in the wrong order. The main difference is that Bubble Sort does this in one pass through the list, whereas Odd-Even Sort does this in two passes - one for odd indexed elements and one for even indexed elements.'
          />
        </ListItem>
      </List>
    </>
  },

  'Pigeonhole Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Pigeonhole Sort is a sorting algorithm that works by distributing the items to be sorted into pigeonholes (categories) based on the key of each item. Each pigeonhole corresponds to a range of key values. For example, if the range of key values is from 1 to 10, then ten pigeonholes can be created, one for each key value.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The algorithm consists of three stages. In the first stage, the items are distributed into their respective pigeonholes. In the second stage, each pigeonhole is sorted individually. If the pigeonholes are of size 1, then this step is trivial. In the third stage, the items are gathered back from the pigeonholes to get the sorted list.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Pigeonhole Sort is a stable algorithm, which means that it preserves the order of items with equal keys. Its time complexity is O(n + N), where n is the number of items to be sorted, and N is the range of key values. This makes it suitable for lists with relatively small ranges of key values. However, it may not be practical for lists with a large range of key values because it requires a lot of memory to store the pigeonholes.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Radix Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Radix Sort is similar to Pigeonhole Sort as it also involves distributing the items into buckets based on their keys. However, Radix Sort distributes the items based on individual digits of the keys rather than the entire key.'
          />
        </ListItem>
      </List>
    </>
  },

  'Bucket Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Bucket Sort is a sorting algorithm that distributes the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sort algorithm.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The basic idea behind Bucket Sort is to take advantage of the fact that if there are N uniformly distributed random numbers, dividing them into M intervals (or buckets), each bucket will contain approximately N/M numbers. This can greatly reduce the number of comparisons needed to sort the numbers.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The time complexity of bucket sort is O(n + k), where n is the number of elements to be sorted, and k is the number of buckets. It is an efficient algorithm when the values of the elements are evenly distributed across the buckets. However, it may perform poorly if the values are not evenly distributed. It is a stable algorithm, as it preserves the relative order of elements with equal values, but it is not an in-place algorithm, as it requires additional memory space for the buckets.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Radix Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Radix Sort is similar to Bucket Sort as it distributes the elements into buckets. However, it does this based on the individual digits of the numbers at each pass.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Counting Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Counting Sort is similar to Bucket Sort as it also distributes the elements into buckets, but it does this by counting the occurrence of each element.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Pigeonhole Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Pigeonhole Sort is another algorithm similar to Bucket Sort. It works by assigning each element to a pigeonhole based on its value and then collecting the elements from the pigeonholes to get the sorted order.'
          />
        </ListItem>
      </List>
    </>
  },

  'Counting Sort': {
    description: <>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Counting Sort is a non-comparison based sorting algorithm that sorts integers in an array by counting the number of occurrences of each integer in the input array. It is particularly efficient when the range of integers in the array (the difference between the maximum and minimum values) is not significantly larger than the number of elements in the array.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        The algorithm works by counting the number of times each value appears in the original array and storing that count in a separate array. Then, the count array is used to reconstruct a sorted version of the original array.
      </Typography>
      <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
        Counting Sort has a time complexity of O(n + k), where n is the number of elements in the array, and k is the range of the input values. It is a stable algorithm, which means it preserves the relative order of equal elements, but it is not an in-place algorithm, as it requires additional memory space to store the count array. Additionally, it only works for sorting integers and is not suitable for sorting floating-point numbers or strings.
      </Typography>
      <Typography variant="h3">Similar Algorithms</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Radix Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Radix Sort is similar to Counting Sort as it also sorts integers by distributing them into buckets, but it does so digit by digit, starting from the least significant digit to the most significant.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Bucket Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Bucket Sort is similar to Counting Sort as it also distributes the elements into buckets. However, in Bucket Sort, the buckets are sorted individually, and then the sorted buckets are concatenated to get the final sorted list.'
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={LIST_HEADER_STYLE}
            primary='Pigeonhole Sort'
            secondaryTypographyProps={LIST_ITEM_STYLE}
            secondary='Pigeonhole Sort is another variant of Counting Sort, which works by creating an array of pigeonholes (buckets) and placing each element in the appropriate pigeonhole based on its value. Then, the pigeonholes are visited in order and the elements are collected to form the sorted list.'
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
