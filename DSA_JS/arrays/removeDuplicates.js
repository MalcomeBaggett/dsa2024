const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
function removeDuplicates(nums) {
  let left = 1

  for (let right = 1; right < nums.length; right++) {
    // Check if the previous index is not the same as the current
    // if not we have found a new unique value and we increment the left counter and swap values
    if (nums[right] != nums[right - 1]) {
      nums[left] = nums[right]
      left += 1
    }
  }
  return left
}
