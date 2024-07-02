import { Button } from "../../ui/Button";
import AvatarNoName from "../../assets/svg/AvatarNoName/AvatarNoName";
import style from "./Autorized.module.scss";
import { useCallback, useEffect, useState } from "react";
import AuthModal from "../AuthModal/AuthModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { User, logout } from "../../api/Auth";
import { queryClient } from "../../api/queryClient";
import { useDispatch, useSelector } from "react-redux";
import { getTokenUser } from "../../providers/StoreProvider/selectors/getTokenUser";
import { tokenActions } from "../../providers/StoreProvider/slice/tokenSlice";
import { userActions } from "../../providers/StoreProvider";
import { getUserAuthData } from "../../providers/StoreProvider/selectors/getUserAuth";
import Dropdown from "../../ui/Dropdown/Dropdown";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

function Autorized() {
  const dispatch = useDispatch();
  const token = useSelector(getTokenUser);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const users = useSelector(getUserAuthData);

  const logoutMutation = useMutation(
    {
      mutationFn: (data: string | undefined) => logout(data),
      onSuccess: () => {
        dispatch(tokenActions.logout());
        queryClient.invalidateQueries();
      },
    },
    queryClient
  );

  const meUsers = useQuery(
    {
      queryFn: () => User(token),
      queryKey: ["user"],
      enabled: !!token,
      retry: 0,
    },
    queryClient
  );

  useEffect(() => {
    dispatch(userActions.setUserAuth(meUsers.data));
  }, [meUsers.data]);

  const logoutClick = () => {
    logoutMutation.mutate(token);
  };

  const onOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  useEffect(() => {
    if (token) {
      setIsOpenModal(false);
    }
  }, [token]);

  if (token) {
    return (
      <div className={style.autoriz}>
        <div className={style.wiget}>
          {users?.first_name && (
            <div className={style.username}>{users?.first_name}</div>
          )}
        </div>
        <div className={style.avatar}>
          <Dropdown
            items={[
              {
                id: '1',
                content: "Мои заказы",
                href: "/basket",
              },
              {
                id: '2',
                content: "Настройки профиля",
                href: "/profile",
              },
              {
                id: '3',
                content: "Запасное",
              },
              {
                id: '4',
                content: <SwitchTheme />
              },
              {
                id: '5',
                content: "Выйти",
                onClick: logoutClick,
              },
            ]}
            trigger={<AvatarNoName className={style.icon} />}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={style.autoriz}>
      <div className={style.wiget}></div>
      <Button className={style.avatar} onClick={onOpenModal}>
        <AvatarNoName className={style.icon} />
        <p className={style.descr}>Войти</p>
      </Button>
      <AuthModal isOpen={isOpenModal} onClose={onCloseModal} lazy hiddenClose />
    </div>
  );
}

export default Autorized;
