bookModel.aggregate([
    { operation_1 },
    { operation_2 },
    { operation_3 }
])

bookModel.aggregate([
    {
        $facet: {
            "operation_1": [
                { operation_1_a },
                { operation_1_b },
                { operation_1_c }
            ],

            "operation_2": [
                { operation_2_a },
                { operation_2_b },
                { operation_2_c }
            ]
        }
    }
])