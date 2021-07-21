import React, { useEffect, useState } from 'react';
import { getPostByNo } from '../../Data';
import './Post.css';

// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import HiOutlineHeart from "react-icons/hi";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
     
  
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  favbord:{
    verticalAlign: CenterFocusStrong,
    marginLeft: -15,
  }

});

// const PostView = ({ history, location, match }) => {
//   const [ data, setData ] = useState({});

//   const { no } = match.params;

//   useEffect(() => {
//     setData(getPostByNo(no));
//   }, [ ]);

  // return (
  //   <>
  //     <h2 align="center">게시글 상세정보</h2>

  //     <div className="post-view-wrapper">
  //       {
  //         data ? (
  //           <>
  //             <div className="post-view-row">
  //               <label>게시글 번호</label>
  //               <label>{ data.no }</label>
  //             </div>
  //             <div className="post-view-row">
  //               <label>제목</label>
  //               <label>{ data.title }</label>
  //             </div>
  //             <div className="post-view-row">
  //               <label>작성일</label>
  //               <label>{ data.createDate }</label>
  //             </div>
  //             <div className="post-view-row">
  //               <label>조회수</label>
  //               <label>{ data.readCount }</label>
  //             </div>
  //             <div className="post-view-row">
  //               <label>내용</label>
  //               <div>
  //                 {
  //                   data.content
  //                 }
  //               </div>
  //             </div>
  //           </>
  //         ) : '해당 게시글을 찾을 수 없습니다.'
  //       }
  //       <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
  //     </div>
  //   </>
  // )
// }

// export default PostView;

export default function SimpleCard() {
  const [number, setNumber]=useState(0);
  const classes = useStyles();

  const increaseNumber = () => {
    setNumber(number+1);
  };


  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          @종목명 #테마키워드
        </Typography>
        <Typography variant="h5" component="h2">
          제목입력
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
          게시글 내용의 본문이 1줄정도..
          {/* <br />
          {'"a benevolent smile"'} */}
        </Typography>
        <Button className={classes.favbord} onClick={increaseNumber}>
          <FavoriteBorderIcon/>{number}
        </Button>
        
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}



