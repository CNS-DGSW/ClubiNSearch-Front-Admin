//설명
//제네릭이라는걸 사용해서 각각 유니온에 맞게 값을 넣어줌
//약간 파이썬 for문 느낌? 으로 생각하면 이해가 잘됨
type IErrorValueGeneric<T extends string> = {
  [t in T]: {
    //2. t라는 변수안에 T를 하나씩 꺼내 넣음 -> 총 5개 생성
    context: string;
    isError: boolean;
  };
};

//설명
//이게 유니온 타입(숫자 혹은 문자열이 들어갈 수 있다함)
export type IErrorValue = IErrorValueGeneric<
  "name" | "schoolNumber" | "phoneNumber" | "introduce"
>; //1. 위에있는 값들을 T에 넣어서
