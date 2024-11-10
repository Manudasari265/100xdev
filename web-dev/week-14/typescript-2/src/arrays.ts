function getMax(nums: number[]) {
    let maxValue = -1000000;

    for(let i=0; i<nums.length; i++) {
        if(nums[i] > maxValue) {
            maxValue = nums[i];
        }
    }

    return maxValue;
}

getMax([2,3,4,5]);

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(user => user.age > 18);
}


