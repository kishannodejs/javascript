let job = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};

let location = {
    city: 'London',
    country: 'England'
};

let remoteJob = {
    ...job,
    ...location
};

console.log(remoteJob);