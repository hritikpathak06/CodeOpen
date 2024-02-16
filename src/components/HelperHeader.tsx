import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CompilerState,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";

const HelperHeader = () => {
  const dispatch = useDispatch();

  const currentLanguage = useSelector(
    (state: RootState) => state.compiler.currentLanguage
  );

  return (
    <>
      <div className="__helper__header h-[50px] bg-black text-#fff p-2 flex justify-between items-center gap-1">
        <div className="__btn__container flex gap-1"></div>
        <div className="__tab__switcher flex gap-1 items-center">
          Language:
          <Select
            defaultValue={currentLanguage}
            onValueChange={(value) =>
              dispatch(
                updateCurrentLanguage(value as CompilerState["currentLanguage"])
              )
            }
          >
            <SelectTrigger className="w-[180px] bg-gray-700 focus:ring-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default HelperHeader;
