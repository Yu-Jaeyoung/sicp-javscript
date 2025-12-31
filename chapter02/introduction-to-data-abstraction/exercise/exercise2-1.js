function make_rat(n, d) {
    const g = gcd(Math.abs(n), Math.abs(d));
    return d < 0
        ? pair(-n / g, -d / g)  // 분모가 음수면 둘 다 부호 반전
        : pair(n / g, d / g);   // 분모가 양수면 그대로
}