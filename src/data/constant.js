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

export const MASTERS_DOCUMENT_MASTER_QUEUE = [
    {
        id: 'module',
        name: 'Module'
    }
]

export const MASTERS_COUNTRY_MASTER_QUEUE = [
    {
        id: 'country',
        name: 'Country'
    },
    {
        id: 'status',
        name: 'Status',
    }
]

export const MASTERS_CURRENCY_MASTER_QUEUE = [
    {
        id: 'currency',
        name: 'Currency'
    },
    {
        id: 'currencyName',
        name: 'Currency Name'
    },
    {
        id: 'status',
        name: 'Status',
    }
]

export const MASTERS_TDS_SECTION_MASTER_QUEUE = [
    {
        id: 'section',
        name: 'Section',
    },
    {
        id: 'paymentNature',
        name: 'Nature of Payment'
    }
]

export const MASTERS_SAC_MASTER_QUEUE = [
    {
        id: 'charges',
        name: 'Expense Head'
    },
    {
        id: 'group',
        name: 'Group'
    },
]

export const MASTERS_IIAG_LEDGER_MASTER_QUEUE = [
    {
        id: 'gl_list',
        name: 'List of GL',
    },
    {
        id: 'group',
        name: 'Group'
    }
]

export const MASTERS_INTERNAL_COMPANIES_MASTER_QUEUE = [
    {
        id: 'companyName',
        name: 'Company Name',
    },
    {
        id: 'shortName',
        name: 'Short Name',
    },
    {
        id: 'country',
        name: 'Country',
    }
]