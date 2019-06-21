import riot from 'riot'
import * as SandboxUtils from '../sandbox/sandboxUtils'
import '../../js/tags/tags'

// Set name of tag component here
let tagName = 'product-list'

// Get handle to tag
let getTag = SandboxUtils.getTag


// Define variables/handlers here

let refreshCategories = () => {

    getTag().update({
        opts: {
            showBack: false,
            productCategories: [
                { name: "Purchases/Offers", selected: true},
                { name: "Bundles"},
                { name: "Domain"},
                { name: "Marketing"},
                { name: "SocialMedia"},
                { name: "Website"},
            ]
        }
    })
}

let selectCategory = (category) => {
    let productCategories = [
        { name: "Website 1"},
        { name: "Website 2"},
        { name: "Website 3"}
    ]
    if (category.startsWith("Website ")) {
        productCategories.map((productCategory) => {
            if (productCategory.name == category)
                productCategory.selected = true
            else
                productCategory.selected = false
        })
    }

    getTag().update({
        opts: {
            showBack: true,
            productCategories: productCategories
        }
    })
}

// Initialize opts
let opts = {
    // Data/state variables
    showBack: false,
    productCategories: [
        { name: "Purchases/Offers"},
        { name: "Bundles"},
        { name: "Domain", selected: true},
        { name: "Marketing"},
        { name: "SocialMedia"},
        { name: "Website"},
    ],
    // Event handlers
    selectCategory: selectCategory,
    refreshCategories: refreshCategories
}

riot.mount('.custom-tag', tagName, opts)
