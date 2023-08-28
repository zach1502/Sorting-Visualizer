import { List, ListItem, ListItemText, Typography } from "@mui/material";

const LIST_HEADER_STYLE = { variant: 'h4' };
const LIST_ITEM_STYLE = { variant: 'body1', color: 'black' };

const algorithmDescriptions = {
  'Bubble Sort': {
    paragraph:
      <>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          Bubble Sort is one of the simplest sorting algorithms and it works by repeatedly stepping through the list of items (like numbers) and comparing each pair of adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm gets its name from the way elements "bubble" to the top of the list.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          One important thing to note is that Bubble Sort is not very efficient for lists with a large number of items. Its time complexity is O(n²) in the worst and average case, and O(n) in the best case (when the list is already sorted). For this reason, it is not often used in practice, but it is a good starting point for understanding the principles of sorting.
        </Typography>
        <Typography variant="body1" gutterBottom pt={1} fontSize={'1rem'}>
          Bubble Sort is a stable algorithm, which means that it preserves the order of items with equal keys. It is also an in-place algorithm, which means that it does not require any extra memory space to sort the list.
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
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Merge Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Insertion Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Selection Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Cocktail Shaker Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Radix Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Intro Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Heap Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Block Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Shell Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Tim Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Exchange Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Cycle Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Patience Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Smooth Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Strand Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Comb Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Gnome Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Odd-Even Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Pigeonhole Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Bucket Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Counting Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Spread Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Pancake Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'I Can\'t Believe It Can Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Bitonic Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Bogo Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Stooge Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Slow Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Stalin Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Sleep Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Delete Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },

  'Tree Sort': {
    paragraphs: [
      'text1',
      'text2',
      'text3',
    ],
  },
}


export default algorithmDescriptions;
