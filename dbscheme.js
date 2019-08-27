let db = {
    users: [
        {
            userId: 'agpiu9862sdfjkl',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2019-03-15T10:59:52.7982',
            imageUrl: 'image/asdjklfeiu',
            bio: 'Hello, my name is user',
            website: 'https://user.com',
            location: 'London, UK'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-07-17T01:15:01.280Z',
            likeCount: 5,
            commentCount: 3
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'adjklfahie',
            body: 'nice one mang',
            createdAt: '2019-03-15T10:59:52.7982'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'asakjhadfkjha',
            type: 'like | comment',
            createdAt: '2019-03-15T10:59:52.798Z'
        }
    ]
};

const userDetails = {
    // redux data 
    credentials: {
        userId:'N43KJSH43KJHREW4J5H32WMERHB',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2019-03-15T10:59:52.7982',
        imageUrl: 'image/dalskjghie',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'London, UK'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'hh705oWfWucVzGbHH2pa'
        },
        {
            userHandle: 'user',
            screamId: '3IOnFoQexRcofs50hBXO'
        }
    ]
}