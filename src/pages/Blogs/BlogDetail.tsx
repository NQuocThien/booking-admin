import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import ShowAlert from "src/components/sub/alerts";
import {
  Blog,
  useGetBlogBySlugQuery,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import CustomBreadcrumbs, {
  IBreadcrumbItem,
} from "src/components/sub/Breadcrumbs";
import { useEffect, useState } from "react";
import { useAuth } from "src/context/AuthContext";
import { formatDate } from "src/utils/contain";
function BlogDetailPage() {
  const { slug } = useParams();
  const { checkExpirationToken } = useAuth();
  const [blog, setBlog] = useState<Blog>();
  const { data, loading, error } = useGetBlogBySlugQuery({
    fetchPolicy: "no-cache",
    variables: {
      slug: slug ? slug : "",
    },
  });
  useEffect(() => {
    setBlog(data?.getBlogBySlug);
  }, [data]);
  const location = useLocation();
  checkExpirationToken();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);
  useEffect(() => {
    if (location.pathname.search("/admin-page/blogs") !== -1) {
      setBreadcrumbs([
        { url: "/admin-page/blogs", label: "Danh sách bài viết" },
        {
          url: "",
          label: data?.getBlogBySlug.title || "",
        },
      ]);
    }
  }, [location, data]);
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !slug) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <Container fluid className={`${style.main} `}>
      {breadcrumbs && <CustomBreadcrumbs paths={breadcrumbs} />}
      <Row className={`${style.top}`}>
        <Col className={`col-4`}>
          <div className={`${style.top__info} ${s.component}`}>
            <Image
              className={`${style.top__info_logo}`}
              height={200}
              width={200}
              src={blog?.mainPhoto.url || "/default.jpg"}
              alt="Logo"
              rounded
            />
            <p className={`${style.top__info_name}`}>{blog?.title}</p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <span className="text-primary">Ưu tiên:</span>
              <p>{blog?.priority}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <span className="text-primary">Link social: </span>
              <p>{blog?.shortContent}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <span className="text-primary">Từ khóa:</span>
              <p>{blog?.keywords}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <span className="text-primary"> Người đăng: </span>
              <p>{blog?.createdBy.showName}</p>
              {blog?.createdAt && (
                <p>{formatDate(new Date(blog.createdAt).toDateString())}</p>
              )}
            </div>
            <div className={`${style.top__info_item}`}>
              <span className="text-primary"> Cập nhật: </span>
              <p>{blog?.updatedBy?.showName}</p>
              {blog?.updatedAt && (
                <p>{formatDate(new Date(blog.updatedAt).toDateString())}</p>
              )}
            </div>
            <div className={`${style.top__info_item}`}>
              <span className="text-primary"> Slug: </span>
              <p>{blog?.slug}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <span className="text-primary"> Chuyên mục: </span>
              <p>{blog?.type}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <span className="text-primary"> Trạng thái:</span>
              <p>{blog?.status}</p>
            </div>
          </div>
        </Col>
        <Col className={`col-8 ${style.about}`}>
          <div className={`${style.about__introduce} ${s.component}`}>
            <div
              className={``}
              dangerouslySetInnerHTML={{
                __html: blog?.content || "",
              }}></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default BlogDetailPage;
