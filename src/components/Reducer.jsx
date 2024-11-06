export const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
            case "add_to_cart":
                return { count: state.count - 1 }
        default:
            break;
    }

}
// assignment try to explore useParams hook 