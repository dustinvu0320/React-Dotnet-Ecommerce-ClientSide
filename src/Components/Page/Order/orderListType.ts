import orderHeaderModel from "../../../Interfaces/orderHeaderModel";

export default interface OrderListProps {
  isLoading: boolean;
  orderData: orderHeaderModel[];
}