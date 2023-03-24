/*
This is a small piece of a real world on-the-job problem.
The client your contracting company is building a site for is tired of
having to do duplicate work and has asked you to automate a task.
Whenever they create a new product in the Dato Content Management System
that contains variants, they have to also go to their shopify admin panel
and create the product and variants there as well, however, shopify limits
the number of variants each product can have to 100, so they sometimes
have to create multiple products in shopify to fit all the variants.
Dato has a webhook that can execute your function onNewProduct event and give
you the payload containing the new product from Dato and it's variants.
Your function needs to create the minimum number of new products required to
fit all the variants so that you can send these new products to the shopify API
to automatically create them.
To simplify testing, the variant limit will be 2, but it should be flexible in
case it ever changes.
DO NOT mutate given params.
*/

// New products to be sent to shopify, variant limit of 2 for testing.
const datoEntity1 = {
    /** Dato entity id. */
    id: 1,
    attributes: {
        title: "backpack",
        sku: "3d0921",
        variants: [
            {
                /** Dato variant id. */
                id: 1,
                attributes: { name: "cross-strap", price: 35, _v: 3 },
            },
            {
                id: 2,
                attributes: { name: "travel-40L", price: 68, _v: 1 },
            },
            {
                id: 3,
                attributes: { name: "gym-pack", price: 32, _v: 2 },
            },
            {
                id: 4,
                attributes: { name: "camping", price: 36, _v: 4 },
            },
            {
                id: 5,
                attributes: { name: "duffle", price: 45, _v: 3 },
            },
        ],
    },
};

const expected1 = [
    {
        id: null,
        title: "backpack",
        sku: "3d0921",
        variants: [
            {
                name: "cross-strap",
                price: 35,
            },
            {
                name: "travel-40L",
                price: 68,
            },
        ],
    },
    {
        id: null,
        title: "backpack",
        sku: "3d0921",
        variants: [
            {
                name: "gym-pack",
                price: 32,
            },
            {
                name: "camping",
                price: 36,
            },
        ],
    },
    {
        id: null,
        title: "backpack",
        sku: "3d0921",
        variants: [
            {
                name: "duffle",
                price: 45,
            },
        ],
    },
];

const datoEntity2 = {
    id: 2,
    attributes: {
        title: "helmet",
        sku: "5c3449",
        variants: [
            {
                id: 1,
                attributes: { name: "skateboard", price: 42, _v: 2 },
            },
        ],
    },
};

const expected2 = {
    title: "helmet",
    sku: "5c3449",
    variants: [{ name: "skateboard", price: 42 }],
};

/**
 * Splits variants from a new product added to Dato into new duplicate shopify
 * products based on how many are needed to fit all the variants.
 * Also removes some Dato data that shouldn't be sent to shopify without
 * mutating the given data.
 */
function splitVariantsIntoNewProducts(datoEntity, variantLimit = 2) {
    // Create an empty array to push new objects into
    let expected = [];

    // Create variables to track location in original object variants, as well as location in expected object variants
    let locationInVariants = 0;
    let locationInExpected = 0;

    // While we have variants in the original object left, keep running through the function
    while (locationInVariants < datoEntity.attributes.variants.length) {
        // Push the information that doesn't need to be iterated through
        expected.push({
            id: null,
            title: datoEntity.attributes.title,
            sku: datoEntity.attributes.sku,
            variants: [],
        });
        // Push the amount of variants that need to be in each new object
        for (
            iteratorForAddingVariants = locationInVariants;
            iteratorForAddingVariants < locationInVariants + variantLimit;
            iteratorForAddingVariants++
        ) {
            // IF we don't have any variants left, don't add any
            if (datoEntity.attributes.variants[iteratorForAddingVariants]) {
                expected[locationInExpected]["variants"].push(
                    datoEntity.attributes.variants[iteratorForAddingVariants]
                );
            }
        }
        // Iterate location in variants upwards so we don't repeat variants
        locationInVariants += variantLimit;
        // Iterate location in expected up by 1 so we don't add variants to the same object
        locationInExpected += 1;
        // console.log("locationInVariants==========", locationInVariants)
        // console.log("locationInExpected==========", locationInExpected)
    }
    console.log(expected);
}

splitVariantsIntoNewProducts(datoEntity1);
splitVariantsIntoNewProducts(datoEntity2);
