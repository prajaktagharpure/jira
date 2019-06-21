<product-list>
    <a class="product-list__back" show={ opts.showBack } href="#" onclick={ back }>Back</a>
    <a each={ opts.productCategories } class="product-list__item { active: selected }" href="#" onclick={ selectCategory }>{ name }</a>
    <my-test></my-test>

    <style type="text/less">
        @import "../../css/vars.less";

        .product-list__item, .product-list__back {
            display: block;
            padding: 12px;
            text-decoration: none;
            text-transform: uppercase;
            background-color: #eee;
            color: black;
        }

        .product-list__item:hover, .product-list__back:hover {
            background-color: #ccc;
        }

        .product-list__item.active, .product-list__item:active, .product-list__back:active {
            background-color: #4CAF50;
            color: white;
        }
    </style>

    <script>
        console.log("<product-list> initialized")

        let tag = this
        tag.myName = "Imre"

        // Event handlers
        tag.selectCategory = (e) => {
            opts.selectCategory(e.item.name)
        }
        tag.back = (e) => {
            opts.refreshCategories()
        }
        tag.on("mount", () => {
            tag.update({
                myName: "Jeff"
            });
        })
    </script>
</product-list>
