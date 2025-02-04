import { useForm } from "react-hook-form";

const CardRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  return (
    <form
      className="px-7 pt-[25px] pb-[34px]"
      onSubmit={handleSubmit(async (data) => alert(JSON.stringify(data)))}
    >
      <label htmlFor="cardNumber" className="register-label">
        카드번호
      </label>
      <input
        id="cardNumber"
        type="text"
        className="register-input text-center"
      />
      <label htmlFor="cardDate" className="register-label">
        만료일
      </label>
      <input
        id="cardDate"
        type="text"
        className="register-input w-2/4 text-center"
        placeholder="MM / YY"
        {...register("cardDate")}
      />
      <div className="flex justify-between">
        <label htmlFor="cardOwner" className="register-label">
          카드 소유자 이름
        </label>
        <div className="register-label">0/30</div>
      </div>
      <input
        id="cardOwner"
        type="text"
        className="register-input"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        {...register("cardOwner")}
      />
      <label htmlFor="securityCode" className="register-label">
        보안 코드(CVC/CVV)
      </label>
      <div className="flex gap-[11px] mb-[19px] items-center">
        <input
          id="securityCode"
          type="password"
          className="register-input mb-0 w-1/4 text-center"
          {...register("securityCode")}
        />
        <div className="w-[27px] h-[27px] border border-[#BABABA] text-[#969696] text-xl font-medium text-center rounded-full cursor-pointer">
          ?
        </div>
      </div>
      <label id="cardPasswordLabel" className="register-label">
        카드 비밀번호
      </label>
      <div className="flex gap-[7px]">
        <input
          id="cardPassword1"
          type="password"
          aria-labelledby="cardPasswordLabel"
          className="register-input w-[12%] text-center"
          {...register("cardPassword1")}
        />
        <input
          id="cardPassword2"
          type="password"
          aria-labelledby="cardPasswordLabel"
          className="register-input w-[12%] text-center"
          {...register("cardPassword2")}
        />
        <div className="w-[12%] px-3 py-2 text-center font-medium text-lg cursor-default">
          •
        </div>
        <div className="w-[12%] px-3 py-2 text-center font-medium text-lg cursor-default">
          •
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn w-full text-[14px] py-3 rounded-[20px] mt-[14px]"
      >
        작성 완료
      </button>
    </form>
  );
};

export default CardRegisterForm;
