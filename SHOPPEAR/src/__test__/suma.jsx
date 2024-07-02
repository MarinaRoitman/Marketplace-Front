export default function sumarNumeros(x, b) {
    if (!Number(x) || !Number(b)) {
        return "error";
    }
    if (!Number(x)) {
        return "x";
    }
    if (!Number(b)) {
        return "b";
    }
    return x + b;
}
