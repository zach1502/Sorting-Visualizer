// TreeSort.hpp

#pragma once

#include <vector>

class TreeNode {
 public:
  int value;
  TreeNode* left;
  TreeNode* right;

  TreeNode(int val) : value(val), left(nullptr), right(nullptr) {}
};

class BST {
 private:
  TreeNode* root;

  TreeNode* insert(TreeNode* node, int value) {
    if (!node) return new TreeNode(value);

    if (value < node->value) {
      node->left = insert(node->left, value);
    } else if (value > node->value) {
      node->right = insert(node->right, value);
    }

    return node;
  }

  void inOrderTraversal(TreeNode* node, std::vector<int>& result) {
    if (!node) return;

    inOrderTraversal(node->left, result);
    result.push_back(node->value);
    inOrderTraversal(node->right, result);
  }

  void deleteTree(TreeNode* node) {
    if (!node) return;

    deleteTree(node->left);
    deleteTree(node->right);
    delete node;
  }

 public:
  BST() : root(nullptr) {}

  void insert(int value) { root = insert(root, value); }

  std::vector<int> inOrderTraversal() {
    std::vector<int> result;
    inOrderTraversal(root, result);
    return result;
  }

  ~BST() { deleteTree(root); }
};

void TreeSort(std::vector<int>& arr) {
  BST tree;

  for (int num : arr) {
    tree.insert(num);
  }

  arr = tree.inOrderTraversal();
}
