import express from 'express';
import Products from '../schemas/products.schema.js';
import dotenv from 'dotenv';
const router = express.Router();

dotenv.config();

// 1. 상품 작성 API / POST
// - 상품명, 작성내용, 작성자명, 비밀번호를 req에서 전달 받기
// - status는 FOR_SALE 이나  SOLD_OUT 두가지 값을 가지고 있으며 기본은 FOR_SALE
router.post('/products', async (req, res, next) => {
  // - 상품명, 작성내용, 작성자명, 비밀번호를 req에서 전달 받기
  const {
    title,
    content,
    author,
    password = process.env.PASSWORD,
    status = 'FOR_SALE',
  } = req.body;

  const products = await Products.find({}).exec();

  // req에서 전달 받은 값들이 비어있으면 오류 반환
  if (!title || !content || !author || !password) {
    return res
      .status(400)
      .json({ errorMessage: '데이터 형식이 올바르지 않습니다' });
  }
  const createdProducts = await Products.create({
    title: title,
    content: content,
    author: author,
    password: process.env.PASSWORD,
  });

  return res.status(201).json({
    message: '판매 상품을 등록하였습니다.',
  });
});

// 2. 상품 목록 조회 API / GET
// - 상품명, 작성자명, 상품 상태, 작성 날짜 조회
// - 상품 목록은 작성 날짜를 기준으로 내림차순(최신순) 정렬
router.get('/products', async (req, res, next) => {
  try {
    // 상품 목록 조회
    // createdAt : 데이터베이스 레코드가 생성된 날짜와 시간을 나타내는 필드
    const products = await Products.find({}, '-password').sort({
      createdAt: -1,
    }); // - 상품 목록은 작성 날짜를 기준으로 내림차순(최신순) 정렬

    // 조회된 상품 목록 반환
    return res.status(200).json(products); // - 상품명, 작성자명, 상품 상태, 작성 날짜 조회
  } catch (error) {
    return res
      .status(500)
      .json({ errorMessage: '상품 조회에 실패하였습니다.' });
  }
});
// 3. 상품 상세 조회 API / GET
// - 상품명, 작성 내용, 작성자명, 상품 상태, 작성 날짜 조회하기
router.get('/products/:_id', async (req, res, next) => {
  try {
    //  params 데이터를 받아오기.
    const params = req.params;
    // _id 추출
    const productId = params._id;
    // id찾아서 반환
    const product = await Products.findById(productId, '-password');
    return res.status(200).json(product); // - 상품명, 작성 내용, 작성자명, 상품 상태, 작성 날짜 조회하기
  } catch (error) {
    return res.status(404).json({ errorMessage: '상품 조회에 실패하였습니다' });
  }
});
// 4. 상품 정보 수정 API / PUT
// - 상품명, 작성 내용, 상품 상태, 비밀번호를 request에서 전달받기
// - 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글이 수정
// - 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지 반환
router.put('/products/:_id', async (req, res, next) => {
  try {
    const {
      title,
      content,
      password = process.env.PASSWORD,
      status,
    } = req.body; // - 상품명, 작성 내용, 상품 상태, 비밀번호를 request에서 전달받기
    if (!title || !content || !status) {
      return res
        .status(400)
        .json({ errorMessage: '데이터 형식이 올바르지 않습니다.' });
    }
    const params = req.params;
    const productId = params._id;
    const product = await Products.findById(productId);

    // console.log(product._id);
    // console.log(productId);
    // console.log(product);
    if (product.password !== password) {
      return res
        .status(401)
        .json({ errorMessage: '상품을 수정할 권한이 없습니다.' });
    } // - 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글이 수정
    if (product.password === password) {
      product.title = title;
      product.content = content;
      product.status = status;
    }
    // 저장
    await product.save();

    return res.status(200).json({ message: '상품 정보를 수정하였습니다.' });
  } catch (error) {
    return res.status(404).json({ errorMessage: '상품 조회에 실패하였습니다' }); // - 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지 반환
  }
});
// 5. 상품 삭제 API / DELETE
// - 비밀번호를 request에서 전달받기
// - 수정할 상품과 비밀번호 일치 여부 확인 후, 동일할 때만 글이 삭제
// - 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지 반환
router.delete('/products/:_id', async (req, res, next) => {
  try {
    // - 비밀번호를 request에서 전달받기
    const { password } = req.body;
    const params = req.params;
    const productId = params._id;
    const product = await Products.findById(productId);
    if (!password) {
      return res
        .status(400)
        .json({ errorMessage: '데이터 형식이 올바르지 않습니다.' });
    }
    if (product.password !== password) {
      return res
        .status(401)
        .json({ errorMessage: '상품을 삭제할 권한이 없습니다.' });
    }

    if (product.password === password) {
      await product.deleteOne({ _id: productId }).exec(); // - 수정할 상품과 비밀번호 일치 여부 확인 후, 동일할 때만 글이 삭제
    }
    return res.status(200).json({ message: '상품을 삭제하였습니다' });
  } catch (error) {
    return res.status(404).json({ errorMessage: '상품 조회에 실패하였습니다' }); // - 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지 반환
  }
});
export default router;
