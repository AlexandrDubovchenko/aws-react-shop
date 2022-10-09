import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CartItem } from "~/models/CartItem";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";

type CartItemsProps = {
  items: CartItem[];
  isEditable: boolean;
};

export default function CartItems({ items, isEditable }: CartItemsProps) {
  const totalPrice: number = items.reduce(
    (total, item) => item.count * item.product.price + total,
    0
  );

  return (
    <>
      <List disablePadding>
        {items.map((cartItem: CartItem) => (
          <ListItem
            sx={{ padding: (theme) => theme.spacing(1, 0) }}
            key={cartItem.product.id}
          >
            {isEditable && <AddProductToCart product={cartItem.product} />}
            <ListItemText primary={cartItem.product.name} />
            <Typography variant="body2">
              {formatAsPrice(cartItem.product.price, cartItem.product.currency)}{" "}
              x {cartItem.count} ={" "}
              {formatAsPrice(
                cartItem.product.price * cartItem.count,
                cartItem.product.currency
              )}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ padding: (theme) => theme.spacing(1, 0) }}>
          <ListItemText primary="Shipping" />
          <Typography variant="body2">Free</Typography>
        </ListItem>
        <ListItem sx={{ padding: (theme) => theme.spacing(1, 0) }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {formatAsPrice(totalPrice, "USD")}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
