export const STATISTICS_TYPES = {
    ALL: 'all',
    APPROVED: 'approved',
    REVIEW: 'review',
    REJECTED: 'rejected',
    SAVED: 'saved',
    PENDING: 'pending',
    CLOSED: 'closed'
}

export const LEADS_QUEUE_FILTER_ITEMS = [
    {
        id: 'company_name',
        name: 'Buyer Name'
    },
    {
        id: 'commodity',
        name: 'Commodity'
    },
    // {
    //     id: 'orderId',
    //     name: 'Order Id'
    // },
    {
        id: 'status',
        name: 'Status'
    }
];

export const CHECKER_USERS_QUEUE = [
    {
        id: 'department',
        name: 'Department'
    },
    {
        id: 'status',
        name: 'status'
    },
    {
        id: 'fullname',
        name: 'Fullname'
    }
];

export const MASTERS_PORTS_QUEUE = [
    {
        id: 'port',
        name: 'Port'
    },
    {
        id: 'country',
        name: 'Country',
    },
    {
        id: 'status',
        name: 'Status'
    }
]