function Node(val) {
  this.value = val
  this.left = null
  this.right = null
}
//
const root = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node5 = new Node(5)
const node17 = new Node(17)
const node12 = new Node(12)
//
root.left = node3
root.right = node5
node3.left = node2
node3.right = node17
node5.left = node12

// get max sum between tow parent->child nodes
function maxSum(rootNode, max = 0, prev = rootNode) {
  
  const {left, right} = rootNode
  
  left && (max = Math.max(maxSum(left, max, rootNode), rootNode.value + left.value))
  
  right && (max = Math.max(maxSum(right, max, rootNode), rootNode.value + right.value))
  
  return max
}

console.log("max sum.",maxSum(root));
