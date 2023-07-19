import { Tab, TabList, Tabs, tabClasses } from "@mui/joy";
import { CommentType } from "../../types/comment";
import {
  getCommentListChecked,
  getCommentListLatest,
} from "../../apis/comment";

type TabBoxProps = {
  id: string;
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
};

function TabBox({ setComments, id }: TabBoxProps) {
  const handleChangeTab = (
    e: React.SyntheticEvent<Element, Event> | null,
    value: string | number | null
  ) => {
    if (value === 0) {
      getCommentListLatest(+id!).then((res) => {
        setComments(res.data);
      });
    } else {
      getCommentListChecked(+id!).then((res) => {
        setComments(res.data);
      });
    }
  };

  return (
    <Tabs onChange={handleChangeTab} aria-label="tabs" defaultValue={0}>
      <TabList
        variant="plain"
        sx={{
          "--List-padding": "0px",
          "--List-radius": "0px",
          "--ListItem-minHeight": "48px",
          [`& .${tabClasses.root}`]: {
            boxShadow: "none",
            fontWeight: "md",
            [`&.${tabClasses.selected}::before`]: {
              content: '""',
              display: "block",
              position: "absolute",
              left: "var(--ListItem-paddingLeft)", // change to `0` to stretch to the edge.
              right: "var(--ListItem-paddingRight)", // change to `0` to stretch to the edge.
              bottom: 0,
              height: 3,
              bgcolor: "primary.400",
            },
          },
        }}
      >
        <Tab>최근</Tab>
        <Tab>미응답</Tab>
      </TabList>
    </Tabs>
  );
}

export default TabBox;