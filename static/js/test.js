var nums = [1,2,3,4,5,6,7,8]
var i = binarySearch(0,nums.length - 1,nums,6);
console.log(i);


function binarySearch(left, right, nums, target) {
    if (left <= right) {
        var mid = (left + right) / 2;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            return binarySearch(mid + 1, right, nums, target);
        } else if (nums[mid] > target) {
            return binarySearch(left, mid - 1, nums, target);
        }
    }
    return -1;              
}